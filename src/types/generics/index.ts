export type TWrapper = {
  children: React.ReactNode;
  className?: string;
};

export type TDivProps = React.HTMLAttributes<HTMLDivElement> & TWrapper;

export type TSlug = { params: { slug: string } };
