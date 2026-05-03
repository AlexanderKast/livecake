"use client";

import { Toaster } from "sonner";

export function ToastProvider() {
  return (
    <Toaster
      theme="dark"
      position="bottom-center"
      toastOptions={{
        style: {
          background: "#3D3D3C",
          border: "1px solid #16a34a",
          color: "#ffffff",
          fontFamily: "var(--font-inter), Inter, sans-serif",
        },
      }}
    />
  );
}
