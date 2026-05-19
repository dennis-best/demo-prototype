import type { ButtonHTMLAttributes, ReactNode } from "react";

type GemboxButtonVariant =
  | "primary"
  | "primary-lg"
  | "secondary-lg"
  | "compact-primary"
  | "compact-secondary";

type GemboxButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: GemboxButtonVariant;
  children: ReactNode;
};

export function GemboxButton({
  variant = "primary",
  className = "",
  children,
  type = "button",
  ...rest
}: GemboxButtonProps) {
  return (
    <button
      type={type}
      className={`gb-button gb-button--${variant} ${className}`.trim()}
      {...rest}
    >
      <span className="gb-button__inner">{children}</span>
    </button>
  );
}
