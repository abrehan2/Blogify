// Imports:
import { BodyWrapper } from '@/components/generics/body-wrapper';
import { Grid } from '@/components/generics/grid-wrapper';
import { Categories } from '@/components/resource/categories';
import { PostDetails } from '@/components/resource/post-details';
import { PostDetailsProvider } from '@/contexts/post-details';
import { MainLayout } from '@/layouts/main';
import { TSlug } from '@/types/generics';

export default function Page({ params }: TSlug) {
  return (
    <MainLayout>
      <BodyWrapper>
        <Grid.Wrapper>
          <PostDetailsProvider slug={params.slug}>
            <Grid.Left>
              <PostDetails />
            </Grid.Left>
            <Grid.Right>
              <Categories />
            </Grid.Right>
          </PostDetailsProvider>
        </Grid.Wrapper>
      </BodyWrapper>
    </MainLayout>
  );
}
