type ButtonProps = {
  variant?: 'primary' | 'secondary';
  children?: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
};

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={`ui-button ${variant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}