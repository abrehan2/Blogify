'use client';

// Imports:
import { Skeleton } from '@/components/ui/skeleton';
import { usePostDetails } from '@/contexts/post-details';
import { RichText } from '@graphcms/rich-text-react-renderer';
import moment from 'moment';
import Image from 'next/image';

export function PostDetails() {
  const { loading, postDetails } = usePostDetails();

  return (
    <div className="max-w-full mx-auto space-y-5">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
        {loading ? <Skeleton className="w-3/4 h-10" /> : postDetails?.title}
      </h1>

      {loading ? (
        <Skeleton className="w-full h-60 rounded" />
      ) : (
        postDetails?.featuredImage?.url && (
          <Image
            src={postDetails.featuredImage?.url ?? ''}
            width={500}
            height={500}
            alt={`Post: ${postDetails.title}`}
            className="w-full object-cover border-gray-300 border-2 rounded"
          />
        )
      )}

      <div className="flex items-center text-sm text-gray-600 mb-6">
        {loading ? (
          <>
            <Skeleton className="w-32 h-4 mr-4" />
            <Skeleton className="w-16 h-4" />
          </>
        ) : (
          <>
            <p className="mr-4">
              <strong className="font-semibold">
                {postDetails?.author.name}
              </strong>{' '}
              | {moment(postDetails?.createdAt).format('MMMM DD, YYYY')}
            </p>
            <span
              className="bg-gray-200 px-3 py-1 rounded-full text-gray-800 text-xs font-medium"
              key={postDetails?.category.map((cat) => cat.slug).join('')}
            >
              {postDetails?.category.map((cat) => cat.name).join(', ')}
            </span>
          </>
        )}
      </div>

      <RichText
        content={postDetails?.content.raw}
        renderers={{
          h1: ({ children }) => (
            <h1 className="text-3xl font-bold text-gray-800 my-6">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-semibold text-gray-800 my-4">
              {children}
            </h2>
          ),
          p: ({ children }) => (
            <p className="text-lg text-justify leading-relaxed text-gray-700 my-4">
              {children}
            </p>
          ),
          code_block: ({ children }) => (
            <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
              {children}
            </pre>
          ),
          code: ({ children }) => (
            <code className="bg-gray-100 p-1 rounded-sm text-blue-600">
              {children}
            </code>
          ),
        }}
      />
    </div>
  );
}
