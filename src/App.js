import './tailwind.output.css';
import Container from './components/container'
import Picture from './components/picture'
import Grid from './components/grid'

function App() {
  return (
    <Container>
      <Picture />

      <Grid>
        <Grid.Column>
          <Picture shape="square"/>
        </Grid.Column>
        <Grid.Column>
          <Picture shape="square"/>
        </Grid.Column>
        <Grid.Column>
          <Picture shape="square"/>
        </Grid.Column>
        <Grid.Column>
          <Picture shape="square"/>
        </Grid.Column>
        <Grid.Column>
          <Picture shape="square"/>
        </Grid.Column>
        <Grid.Column>
          <Picture shape="square"/>
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default App;
