import Link from "next/link";

interface GradientLinkButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function GradientLinkButton({
  href,
  children,
  className = "",
}: GradientLinkButtonProps) {
  const classes = [
    "inline-block",
    "px-12 py-2",
    "rounded-full",
    "bg-gradient-to-r from-[#48d6e0] to-[#57c2a5]",
    "font-oswald",
    "text-white text-lg font-semibold tracking-wider uppercase",
    "hover:opacity-90 transition-opacity",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // `next/link`のハッシュのみ遷移（例: "#contact"）は、環境によってスクロールが発火しないことがあるため、
  // 同一ページ内アンカーは素直に <a> を使う。
  if (href.startsWith("#")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
