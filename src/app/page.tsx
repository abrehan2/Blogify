// Imports:
import { BodyWrapper } from '@/components/generics/body-wrapper';
import { Grid } from '@/components/generics/grid-wrapper';
import { Categories } from '@/components/resource/categories';
import { Pagination } from '@/components/resource/pagination';
import { Posts } from '@/components/resource/posts';
import { PostsProvider } from '@/contexts/posts';
import { MainLayout } from '@/layouts/main';
import { Suspense } from 'react';

export const revalidate = 120; // 2 minutes for revalidation (Incremental Static Regeneration).

export default function Home() {
  return (
    <Suspense>
      <MainLayout>
        <BodyWrapper>
          <Grid.Wrapper>
            <PostsProvider>
              <Grid.Left>
                <Posts />
              </Grid.Left>
              <Grid.Right>
                <Pagination />
                <Categories />
              </Grid.Right>
            </PostsProvider>
          </Grid.Wrapper>
        </BodyWrapper>
      </MainLayout>
    </Suspense>
  );
}
