type CardProps = {
  children?: React.ReactNode;
  className?: string;
};

export function Card({ children, className = '', ...props }: CardProps) {
  return (
    <article className={`ui-card ${className}`} {...props}>
      {children}
    </article>
  );
}