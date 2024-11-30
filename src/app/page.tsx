// Imports:
import { BodyWrapper } from '@/components/generics/body-wrapper';
import { Grid } from '@/components/generics/grid-wrapper';
import { Categories } from '@/components/resource/categories';
import { Posts } from '@/components/resource/posts';
import { Widgets } from '@/components/resource/widgets';
import { MainLayout } from '@/layouts/main';

export const revalidate = 120; // 2 minutes for revalidation (Incremental Static Regeneration).

export default function Home() {
  return (
    <MainLayout>
      <BodyWrapper>
        <Grid.Wrapper>
          <Grid.Left>
            <Posts />
          </Grid.Left>
          <Grid.Right>
            <Widgets slug="" categories={[]} />
            <Categories />
          </Grid.Right>
        </Grid.Wrapper>
      </BodyWrapper>
    </MainLayout>
  );
}
