const posts = [
  {
    title: 'React Testing',
    excerpt: 'This is an excerpt of the post.',
  },

  {
    title: 'React Testing Library',
    excerpt: 'This is an excerpt of the post.',
  },
];

export function Posts() {
  return (
    <>
      {posts.map((post, key) => (
        <div key={key}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </>
  );
}
