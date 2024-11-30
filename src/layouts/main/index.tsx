import { HeadComponent } from '@/components/generics/head';
import { TWrapper } from '@/types/generics';

export function MainLayout({ children }: TWrapper) {
  return (
    <>
      <HeadComponent />
      {children}
    </>
  );
}
