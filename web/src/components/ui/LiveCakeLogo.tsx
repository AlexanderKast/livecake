import { cn } from "@/lib/utils";

interface LiveCakeLogoProps {
  variant?: "light" | "dark";
  className?: string;
  width?: number;
  height?: number;
}

export function LiveCakeLogo({
  variant = "light",
  className,
  width,
  height,
}: LiveCakeLogoProps) {
  const cakeColor = variant === "dark" ? "#22C55E" : "#16A34A";

  return (
    <svg
      viewBox="0 0 148 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={cn("select-none flex-shrink-0 w-auto", className)}
      aria-hidden="true"
    >
      {/* Badge LIVE */}
      <rect x="0" y="7" width="46" height="26" rx="4" fill="#FF0033" />
      <text
        x="23"
        y="25"
        textAnchor="middle"
        fontFamily="var(--font-manrope), Manrope, Inter, Arial, sans-serif"
        fontWeight="800"
        fontSize="12"
        fill="white"
        letterSpacing="1.5"
      >
        LIVE
      </text>
      {/* Wordmark CAKE */}
      <text
        x="54"
        y="30"
        fontFamily="var(--font-manrope), Manrope, Inter, Arial, sans-serif"
        fontWeight="700"
        fontSize="22"
        fill={cakeColor}
        letterSpacing="-0.3"
      >
        CAKE
      </text>
    </svg>
  );
}
