import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant?: 'primary' | 'secondary' | 'danger';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, isLoading, variant = 'primary', ...props }, ref) => {
    const baseStyles = 'px-4 py-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50';
    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700',
      secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
      danger: 'bg-red-600 text-white hover:bg-red-700',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <Loader2 className="w-4 h-4 animate-spin mr-2" />
            Loading...
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;