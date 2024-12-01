'use client';

// Imports:
import { getPostDetails } from '@/services/posts';
import {
  TPostDetails,
  TPostDetailsContextType,
  TPostDetailsProviderProps,
} from '@/types/posts';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const PostDetailsContext = createContext<TPostDetailsContextType | undefined>(
  undefined
);

export function PostDetailsProvider({
  slug,
  children,
}: TPostDetailsProviderProps) {
  const [postDetails, setPostDetails] = useState<TPostDetails['post']>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const fetchPostDetails = await getPostDetails(slug);
      setPostDetails(fetchPostDetails);
      setLoading(false);
    })();
  }, [slug]);

  const values = useMemo(
    () => ({ postDetails, loading }),
    [postDetails, loading]
  );

  return (
    <PostDetailsContext.Provider value={values}>
      {children}
    </PostDetailsContext.Provider>
  );
}

export const usePostDetails = () => {
  const context = useContext(PostDetailsContext);

  if (context === undefined) {
    throw new Error('usePostDetails must be used within a PostDetailsProvider');
  }

  return context;
};
