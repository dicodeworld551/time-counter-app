import clsx from 'clsx';

type CardProps = {
  title: string;
  description: string;
  eyebrow?: string;
  className?: string;
};

export default function Card({
  title,
  description,
  eyebrow,
  className
}: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-3xl border border-slate-800 bg-slate-900/60 p-8 shadow-card backdrop-blur',
        className
      )}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brass-200">
          {eyebrow}
        </p>
      ) : null}
      <h3 className="mt-4 text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">{description}</p>
    </div>
  );
}
