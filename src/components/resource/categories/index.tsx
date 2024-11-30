'use client';

// Imports:
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { getCategories } from '@/services/posts';
import { TCategories } from '@/types/posts';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Categories() {
  const [categories, setCategories] = useState<TCategories['categories']>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const fetchCategories = await getCategories();
      setCategories(fetchCategories);
      setLoading(false);
    })();
  }, []);

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
      <div className="lg:sticky relative top-8">
        <Card className="cursor-pointer">
          <CardHeader>
            <CardTitle className="text-lg font-semibold border-b border-slate-400 pb-4">
              Categories
            </CardTitle>
          </CardHeader>

          <CardContent className="space-x-2">
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <Skeleton
                    key={index}
                    className="w-20 h-6 rounded-md inline-block"
                  />
                ))
              : categories.map((category) => (
                  <Badge
                    key={`Category: ${category.slug}`}
                    variant={'destructive'}
                  >
                    <Link href={`/category/${category.slug}`}>
                      {category.name}
                    </Link>
                  </Badge>
                ))}
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
