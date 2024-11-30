// Imports:
import { BodyWrapper } from '@/components/generics/body-wrapper';
import { Grid } from '@/components/generics/grid-wrapper';
import { Posts } from '@/components/posts';
import { Widgets } from '@/components/widgets';

export default function Home() {
  return (
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
  );
}
