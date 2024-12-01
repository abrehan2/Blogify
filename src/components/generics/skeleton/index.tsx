// Imports:
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { motion } from 'framer-motion';

function CardSkeleton() {
  return Array.from({ length: 3 }).map((_, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 25,
      }}
    >
      <Card className="cursor-pointer space-y-4">
        <CardHeader className="space-y-3 pb-0">
          <Skeleton className="h-40 w-full rounded" />
          <Skeleton className="h-6 w-3/4" />
        </CardHeader>
        <CardContent className="pb-0">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </CardContent>
        <CardFooter>
          <div className="flex items-center gap-x-2">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="space-y-2 w-full">
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-1/3" />
            </div>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  ));
}

// ------------------------------------------------------xx------------------------------------------------------------

function CategorySkeleton() {
  return Array.from({ length: 3 }).map((_, index) => (
    <Skeleton key={index} className="w-20 h-6 rounded-md inline-block" />
  ));
}

// ------------------------------------------------------xx------------------------------------------------------------

function WidgetSkeleton() {
  return Array.from({ length: 3 }).map((_, index) => (
    <div key={index} className="flex items-center w-full mb-4">
      <div className="w-16 flex-none">
        <Skeleton className="w-16 h-16 rounded-md" />
      </div>
      <div className="flex-grow ml-4">
        <Skeleton className="w-24 h-4 mb-2" />
        <Skeleton className="w-40 h-6" />
      </div>
    </div>
  ));
}

// ------------------------------------------------------xx------------------------------------------------------------

function PaginationSkeleton() {
  return <Skeleton className="w-12 h-12 rounded-full" />;
}

// ------------------------------------------------------xx------------------------------------------------------------

function PostDetailsTitleSkeleton() {
  return <Skeleton className="w-3/4 h-10" />;
}

// ------------------------------------------------------xx------------------------------------------------------------

function FeaturedImageSkeleton() {
  return <Skeleton className="w-full h-60 rounded" />;
}

// ------------------------------------------------------xx------------------------------------------------------------

function AuthorPostDetailsSkeleton() {
  return <Skeleton className="w-32 h-4 mr-4" />;
}

function AuthorPostCategorySkeleton() {
  return <Skeleton className="w-16 h-4" />;
}

function RichTextEditorSkeleton() {
  return <Skeleton className="w-full h-64" />;
}

export const SkeletonCollection = {
  CardSkeleton,
  CategorySkeleton,
  WidgetSkeleton,
  PaginationSkeleton,
  PostDetailsTitleSkeleton,
  FeaturedImageSkeleton,
  AuthorPostDetailsSkeleton,
  AuthorPostCategorySkeleton,
  RichTextEditorSkeleton,
};
