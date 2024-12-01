// Imports:
import { config } from '@/config/env-variables';
import { TCategories, TData, TNode, TPostDetails } from '@/types/posts';
import { gql, request } from 'graphql-request';

export async function getPosts() {
  const query = gql`
    query Posts {
      postsConnection {
        edges {
          node {
            author {
              id
              bio
              name
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            category {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result: { postsConnection: { edges: unknown[] } } = await request(
    config.GRAPH_QL_API,
    query
  );

  return result.postsConnection.edges as TNode[];
}

export async function getRecentPosts() {
  const query = gql`
    query GetPostDetails {
      posts(orderBy: createdAt_ASC, last: 3) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result: TData = await request(config.GRAPH_QL_API, query);

  return result.posts;
}

export async function getCategoryPosts(slug: string) {
  const query = gql`
    query SelectedPosts($slug: [String!]) {
      posts(where: { category_some: { slug_in: $slug } }) {
        title
        slug
        createdAt
        excerpt
        featuredImage {
          url
        }
        author {
          name
          photo {
            url
          }
        }
      }
    }
  `;

  const result: TData = await request(config.GRAPH_QL_API, query, {
    slug: [slug],
  });

  return result.posts;
}

export async function getCategories() {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `;

  const result: TCategories = await request(config.GRAPH_QL_API, query);

  return result.categories;
}

export async function getPostDetails(slug: string) {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        author {
          id
          bio
          name
          photo {
            url
          }
        }
        createdAt
        slug
        title
        excerpt
        featuredImage {
          url
        }
        category {
          name
          slug
        }
        content {
          raw
        }
      }
    }
  `;

  const result: TPostDetails = await request(config.GRAPH_QL_API, query, {
    slug,
  });

  return result.post;
}
