'use client';

// Imports:
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getCategories } from '@/services/posts';
import { TCategories } from '@/types/posts';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Categories() {
  const [categories, setCategories] = useState<TCategories['categories']>([]);

  useEffect(() => {
    (async () => {
      const fetchCategories = await getCategories();
      setCategories(fetchCategories);
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
            {categories.map((catrgory) => (
              <Badge key={`Category: ${catrgory.slug}`} variant={'destructive'}>
                <Link href={`/category/${catrgory.slug}`}>{catrgory.name}</Link>
              </Badge>
            ))}
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
