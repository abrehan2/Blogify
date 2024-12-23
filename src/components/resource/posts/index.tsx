'use client';

// Imports:
import { SkeletonCollection } from '@/components/generics/skeleton';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { usePosts } from '@/contexts/posts';
import { MasonryWrapper } from '@/layouts/masonry';
import { TNode } from '@/types/posts';
import { motion } from 'framer-motion';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

export function Posts() {
  const { loading, posts } = usePosts();

  return (
    <>
      <MasonryWrapper>
        {loading
          ? SkeletonCollection.CardSkeleton()
          : posts?.map((post: TNode, key) => (
              <Link
                href={`/post/${post?.node.slug}`}
                key={key}
                prefetch={false}
              >
                <motion.div
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
                      <Image
                        src={post?.node.featuredImage?.url ?? ''}
                        width={500}
                        height={500}
                        alt={`Post: ${post?.node.title}`}
                        className="object-cover border-gray-300 border-2 rounded"
                      />

                      <CardTitle className="text-lg font-bold">
                        {post?.node.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pb-0">
                      <p className="text-sm font-normal text-justify text-gray-400 line-clamp-6">
                        {post?.node.excerpt}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <div className="flex items-center gap-x-2">
                        <Image
                          src={post?.node.author?.photo?.url}
                          width={100}
                          height={100}
                          alt={`Author: ${post?.node.author?.name}`}
                          className="size-3/12 object-cover border-gray-300 border-2 rounded-full"
                        />

                        <div className="text-gray-400 overflow-hidden">
                          <p className="text-xs font-normal">
                            {post?.node.author?.name}
                          </p>
                          <p className="text-xs font-normal">
                            {moment(post?.node.createdAt).format('DD-MM-YYYY')}
                          </p>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              </Link>
            ))}
      </MasonryWrapper>
    </>
  );
}
