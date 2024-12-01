'use client';

import { SkeletonCollection } from '@/components/generics/skeleton';
// Imports:
import {
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
  Pagination as PaginationWrapper,
} from '@/components/ui/pagination';
import { usePosts } from '@/contexts/posts';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';

export function Pagination() {
  const { currentPage, setCurrentPage, totalPages, loading } = usePosts();
  const searchParams = useSearchParams();

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    !searchParams.has('category') && (
      <PaginationWrapper className="flex justify-end">
        <PaginationContent>
          <PaginationItem>
            {loading ? (
              SkeletonCollection.PaginationSkeleton()
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <PaginationPrevious
                  onClick={handlePrev}
                  isActive={currentPage === 1}
                  type="button"
                />
              </motion.div>
            )}
          </PaginationItem>
          <PaginationItem>
            {loading ? (
              SkeletonCollection.PaginationSkeleton()
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <PaginationNext
                  onClick={handleNext}
                  isActive={currentPage === totalPages}
                />
              </motion.div>
            )}
          </PaginationItem>
        </PaginationContent>
      </PaginationWrapper>
    )
  );
}
