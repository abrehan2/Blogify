// Imports:
import { BodyWrapper } from '@/components/generics/body-wrapper';
import { Grid } from '@/components/generics/grid-wrapper';
import { Posts } from '@/components/posts';
import { Widgets } from '@/components/widgets';
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
            <Widgets />
          </Grid.Right>
        </Grid.Wrapper>
      </BodyWrapper>
    </MainLayout>
  );
}
