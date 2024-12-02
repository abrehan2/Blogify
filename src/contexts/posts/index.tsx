'use client';

// Imports:
import { getPosts } from '@/services/posts';
import { TNode } from '@/types/posts';
import { useSearchParams } from 'next/navigation';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const PostsContext = createContext<{
  posts: TNode[] | undefined;
  loading: boolean;
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}>({
  posts: undefined,
  loading: true,
  currentPage: 0,
  totalPages: 0,
  setCurrentPage: () => {},
});

export function PostsProvider({ children }: { children: React.ReactNode }) {
  const [posts, setPosts] = useState<TNode[] | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3; // Show 3 posts per page
  const searchParams = useSearchParams();

  useEffect(() => {
    let isMounted = true;

    const fetchPosts = async () => {
      setLoading(true);
      const fetchedPosts = await getPosts();

      if (searchParams.has('category')) {
        const categorySlug = searchParams.get('category');
        const filteredPosts = fetchedPosts.filter((post: TNode) =>
          post.node.category.some((c) => c.slug === categorySlug)
        );
        if (isMounted) {
          setPosts(filteredPosts);
          setCurrentPage(1);
        }
      } else {
        if (isMounted) setPosts(fetchedPosts);
      }

      if (isMounted) setLoading(false);
    };

    fetchPosts();

    return () => {
      isMounted = false;
    };
  }, [searchParams]);

  const totalPosts = posts?.length ?? 0;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const currentPosts = posts?.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const values = useMemo(
    () => ({
      posts: currentPosts,
      loading,
      currentPage,
      totalPages,
      setCurrentPage,
    }),
    [posts, loading, currentPage, totalPages]
  );

  return (
    <PostsContext.Provider value={values}>{children}</PostsContext.Provider>
  );
}

export const usePosts = () => {
  const context = useContext(PostsContext);

  if (context === undefined) {
    throw new Error('usePosts must be used within a PostsProvider');
  }

  return context;
};
