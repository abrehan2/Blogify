type TAuthor = {
  id: string;
  bio: string;
  name: string;
  photo: TPhoto;
};

type TPhoto = {
  url: string;
};

type TFeaturedImage = {
  url: string;
};

type TCategory = {
  name: string;
  slug: string;
};

export type TNode = {
  node: {
    author: TAuthor;
    createdAt: string;
    slug: string;
    title: string;
    excerpt: string;
    featuredImage: TFeaturedImage;
    category: TCategory[];
  };
};

export type TPost = {
  title: string;
  featuredImage: TFeaturedImage;
  createdAt: string;
  slug: string;
};

export type TData = {
  posts: TPost[];
};

export type TCategories = {
  categories: TCategory[];
};

export type TPostDetails = {
  post: {
    author: TAuthor;
    createdAt: string;
    slug: string;
    title: string;
    excerpt: string;
    featuredImage: TFeaturedImage;
    category: TCategories['categories'];
    content: {
      raw: any;
    };
  };
};

export type TPostDetailsProviderProps = {
  slug: string;
  children: React.ReactNode;
};

export type TPostDetailsContextType = {
  postDetails: TPostDetails['post'] | undefined;
  loading: boolean;
};
