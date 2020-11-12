import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostList from './components/PostList';
import styled from 'styled-components';
import PostDetail from './components/PostDetail';

const Main = styled.main`
  padding: 20px;
`;

function App() {
  return <Router>
    <Switch>
      <Route exact path='/' component={PostList} />
      <Route path={'/detail/:id'} component={PostDetail} />
    </Switch>
  </Router>
}

export default App;
