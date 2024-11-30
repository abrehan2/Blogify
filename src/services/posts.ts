// Imports:
import { config } from '@/config/env-variables';
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

  return result.postsConnection.edges;
}
