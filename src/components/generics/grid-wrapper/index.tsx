// Imports:
import { cn } from '@/lib/tailwind-class/utils';
import { TDivProps } from '@/types/generics';

function Wrapper({ children, className, ...props }: TDivProps) {
  return (
    <div
      className={cn('grid grid-cols-1 lg:grid-cols-12 gap-12', className)}
      {...props}
    >
      {children}
    </div>
  );
}

function Left({ children, className, ...props }: TDivProps) {
  return (
    <div className={cn('lg:col-span-8 col-span-1', className)} {...props}>
      {children}
    </div>
  );
}

function Right({ children, className, ...props }: TDivProps) {
  return (
    <div className={cn('lg:col-span-4 col-span-1', className)} {...props}>
      {children}
    </div>
  );
}

export const Grid = {
  Wrapper,
  Left,
  Right,
};
