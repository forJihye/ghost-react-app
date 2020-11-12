import PostList from './components/PostList';
import styled from 'styled-components';

const Main = styled.main`
  padding: 20px;
`;

function App() {
  return <Main>
    <PostList />
  </Main>
}

export default App;
