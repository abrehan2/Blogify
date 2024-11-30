// Imports:
import { cn } from '@/lib/tailwind-class/utils';
import { TWrapper } from '@/types/generics';

type DivProps = React.HTMLAttributes<HTMLDivElement> & TWrapper;

function Wrapper({ children, className, ...props }: DivProps) {
  return (
    <div
      className={cn('grid grid-cols-1 lg:grid-cols-12 gap-12', className)}
      {...props}
    >
      {children}
    </div>
  );
}

function Left({ children, className, ...props }: DivProps) {
  return (
    <div className={cn('lg:col-span-8 col-span-1', className)} {...props}>
      {children}
    </div>
  );
}

function Right({ children, className, ...props }: DivProps) {
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
