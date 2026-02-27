import Link from 'next/link';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-brass-400 text-slate-950 hover:bg-brass-300 shadow-lg shadow-brass-400/20',
  secondary:
    'bg-transparent border border-brass-300 text-brass-100 hover:bg-brass-500/20',
  ghost: 'bg-transparent text-slate-100 hover:text-brass-200'
};

export default function Button({
  children,
  href,
  variant = 'primary',
  className,
  type = 'button',
  onClick
}: ButtonProps) {
  const classes = clsx(
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition',
    variantStyles[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
