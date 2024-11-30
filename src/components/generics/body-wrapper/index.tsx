// Imports:
import { cn } from '@/lib/tailwind-class/utils';
import { TWrapper } from '@/types/generics';

export function BodyWrapper({ children, className }: TWrapper) {
  return (
    <div
      className={cn('container mx-auto px-10 mb-8 text-slate-800', className)}
    >
      {children}
    </div>
  );
}
