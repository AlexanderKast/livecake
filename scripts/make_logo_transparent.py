"""
Convert logos with flat near-white background (#f7f7f7) to true transparent PNGs,
with edge decontamination so anti-aliased borders stay clean (no grey halo).

Algorithm:
  observed = alpha * foreground + (1 - alpha) * bg
  - Compute alpha from distance to bg color, normalized by a soft threshold.
  - Recover foreground per pixel: fg = (observed - bg*(1-alpha)) / alpha
  - Snap clearly-bg pixels to alpha=0 and clearly-fg pixels to alpha=1.
"""
from __future__ import annotations

import sys
from pathlib import Path

import numpy as np
from PIL import Image

BG = np.array([247, 247, 247], dtype=np.float32)
# Distance below this -> fully transparent. Distance above -> fully opaque.
LOW = 6.0
HIGH = 60.0


def make_transparent(src: Path, dst: Path) -> None:
    img = Image.open(src).convert("RGB")
    arr = np.asarray(img, dtype=np.float32)

    diff = arr - BG  # H, W, 3
    dist = np.sqrt(np.sum(diff * diff, axis=-1))  # H, W

    alpha = np.clip((dist - LOW) / (HIGH - LOW), 0.0, 1.0)

    # Recover foreground only where there is some opacity to avoid div-by-zero.
    a3 = alpha[..., None]
    safe_a = np.where(a3 < 1e-3, 1.0, a3)
    fg = (arr - BG * (1.0 - a3)) / safe_a
    fg = np.clip(fg, 0.0, 255.0)
    fg = np.where(a3 < 1e-3, 0.0, fg)

    rgba = np.concatenate([fg, alpha[..., None] * 255.0], axis=-1)
    out = Image.fromarray(rgba.astype(np.uint8), mode="RGBA")
    out.save(dst, format="PNG", optimize=True)
    print(f"wrote {dst} ({dst.stat().st_size} bytes)")


def main(paths: list[str]) -> None:
    for p in paths:
        path = Path(p)
        make_transparent(path, path)


if __name__ == "__main__":
    main(sys.argv[1:])
