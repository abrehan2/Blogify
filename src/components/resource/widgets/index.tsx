'use client';

// Imports:
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { getRecentPosts, getSimilarPosts } from '@/services/posts';
import { TPost } from '@/types/posts';
import { TWidget } from '@/types/widgets';
import { motion } from 'framer-motion';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Widgets({ categories, slug }: TWidget) {
  const [relatedPosts, setRelatedPosts] = useState<TPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let posts = null;

      if (slug) {
        posts = await getSimilarPosts(categories, slug);
        setRelatedPosts(posts);
      } else {
        posts = await getRecentPosts();
        setRelatedPosts(posts);
      }
      setLoading(false);
    })();
  }, [slug]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 30,
      }}
    >
      <div className="lg:sticky relative top-8">
        <Card className="cursor-pointer">
          <CardHeader>
            <CardTitle className="text-lg font-semibold border-b border-slate-400 pb-4">
              {slug ? 'Related Posts' : 'Recent Posts'}
            </CardTitle>
          </CardHeader>

          <CardContent>
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="flex items-center w-full mb-4">
                    <div className="w-16 flex-none">
                      <Skeleton className="w-16 h-16 rounded-md" />
                    </div>
                    <div className="flex-grow ml-4">
                      <Skeleton className="w-24 h-4 mb-2" />
                      <Skeleton className="w-40 h-6" />
                    </div>
                  </div>
                ))
              : relatedPosts.map((post: TPost) => (
                  <div
                    key={`Title: ${post.title}`}
                    className="flex items-center w-full mb-4"
                  >
                    <div className="w-16 flex-none">
                      <Image
                        src={post.featuredImage.url}
                        width={500}
                        height={500}
                        alt={`Image: ${post.title}`}
                        className="align-middle w-full object-cover border-gray-300 border-2"
                      />
                    </div>
                    <div className="flex-grow ml-4">
                      <p className="text-gray-400 text-xs">
                        {moment(post.createdAt).format('MM-DD-YYYY')}
                      </p>
                      <Link
                        href={`/post/${post.slug}`}
                        key={`Link: ${post.title}`}
                        className="text-md text-gray-400"
                      >
                        {post.title}
                      </Link>
                    </div>
                  </div>
                ))}
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
