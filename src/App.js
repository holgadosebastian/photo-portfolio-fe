import './tailwind.output.css';
import Container from './components/container'
import Picture from './components/picture'
import PictureList from './components/picture/pictureList'

import Query from "./components/query";
import PICTURES_QUERY from "./queries/picture/pictures";

function App() {
  return (
    <Container>
      <Query query={PICTURES_QUERY} id={null}>
        {({ data: { pictures } }) => {
          return <Picture image={pictures[0].mainImage.url} />
        }}
      </Query>

      <PictureList />
    </Container>
  );
}

export default App;
