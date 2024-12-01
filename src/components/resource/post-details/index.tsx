'use client';

// Imports:
import { SkeletonCollection } from '@/components/generics/skeleton';
import { usePostDetails } from '@/contexts/post-details';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { motion } from 'framer-motion';
import moment from 'moment';
import Image from 'next/image';

export function PostDetails() {
  const { loading, postDetails } = usePostDetails();

  return (
    <div className="max-w-full mx-auto space-y-5">
      <motion.h1
        className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {loading
          ? SkeletonCollection.PostDetailsTitleSkeleton()
          : postDetails?.title}
      </motion.h1>

      {loading
        ? SkeletonCollection.FeaturedImageSkeleton()
        : postDetails?.featuredImage?.url && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={postDetails.featuredImage?.url ?? ''}
                width={500}
                height={500}
                alt={`Post: ${postDetails.title}`}
                className="w-full object-cover border-gray-300 border-2 rounded"
              />
            </motion.div>
          )}

      <div className="flex items-center text-sm text-gray-600 mb-6">
        {loading ? (
          <>
            {SkeletonCollection.AuthorPostDetailsSkeleton()}
            {SkeletonCollection.AuthorPostCategorySkeleton()}
          </>
        ) : (
          <>
            <motion.p
              className="mr-4 text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <strong className="font-semibold">
                {postDetails?.author.name}
              </strong>{' '}
              | {moment(postDetails?.createdAt).format('MMMM DD, YYYY')}
            </motion.p>
            <motion.span
              className="bg-gray-200 px-3 py-1 rounded-full text-gray-800 text-xs font-medium"
              key={postDetails?.category.map((cat) => cat.slug).join('')}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {postDetails?.category.map((cat) => cat.name).join(', ')}
            </motion.span>
          </>
        )}
      </div>

      {loading
        ? SkeletonCollection.RichTextEditorSkeleton()
        : postDetails?.content && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <RichText
                content={postDetails?.content?.raw}
                renderers={{
                  h1: ({ children }) => (
                    <motion.h1
                      className="text-3xl font-bold text-gray-800 my-6"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      {children}
                    </motion.h1>
                  ),
                  h2: ({ children }) => (
                    <motion.h2
                      className="text-2xl font-semibold text-gray-800 my-4"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      {children}
                    </motion.h2>
                  ),
                  p: ({ children }) => (
                    <motion.p
                      className="text-lg text-justify leading-relaxed text-gray-700 my-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      {children}
                    </motion.p>
                  ),
                  code_block: ({ children }) => (
                    <motion.pre
                      className="bg-gray-100 p-4 rounded-md overflow-auto"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {children}
                    </motion.pre>
                  ),
                  code: ({ children }) => (
                    <motion.code
                      className="bg-gray-100 p-1 rounded-sm text-blue-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {children}
                    </motion.code>
                  ),
                }}
              />
            </motion.div>
          )}
    </div>
  );
}
