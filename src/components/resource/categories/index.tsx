'use client';

// Imports:
import { SkeletonCollection } from '@/components/generics/skeleton';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getCategories } from '@/services/posts';
import { TCategories } from '@/types/posts';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export function Categories() {
  const [categories, setCategories] = useState<TCategories['categories']>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const searchParams = new URLSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  useEffect(() => {
    let isMounted = true;
    const fetchCategories = async () => {
      try {
        const fetchCategoriesData = await getCategories();
        if (isMounted) {
          setCategories(fetchCategoriesData);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          console.error('Error fetching categories:', error);
          setLoading(false);
        }
      }
    };

    fetchCategories();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleCategoryClick = (slug: string) => {
    params.set('category', slug);
    router.push(`/?${params.toString()}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 35,
      }}
    >
      <div className="lg:sticky relative top-8 pb-10">
        <Card className="cursor-pointer">
          <CardHeader>
            <CardTitle className="text-lg font-semibold border-b border-slate-400 pb-4">
              Categories
            </CardTitle>
          </CardHeader>

          <CardContent className="space-x-2">
            {loading
              ? SkeletonCollection.CategorySkeleton()
              : categories.map((category) => (
                  <Badge
                    key={category.slug}
                    variant={'destructive'}
                    onClick={() => handleCategoryClick(category.slug)}
                  >
                    {category.name}
                  </Badge>
                ))}
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
