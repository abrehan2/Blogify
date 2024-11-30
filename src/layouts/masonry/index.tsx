'use client';

// Imports:
import { TWrapper } from '@/types/generics';
import dynamic from 'next/dynamic';

// Dynamic imports:
const Masonry = dynamic(() => import('react-layout-masonry'), { ssr: false });

export function MasonryWrapper({ children }: TWrapper) {
  return (
    <Masonry columns={{ 640: 1, 768: 2, 1024: 3 }} gap={16}>
      {children}
    </Masonry>
  );
}
