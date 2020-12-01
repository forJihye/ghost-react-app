import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import List from './components/List';
import styled from 'styled-components';
import Detail from './components/Detail';
import Blog from './components/Blog';

const Main = styled.main`
  padding: 20px;
`;

function App() {
  return <Router>
    <Switch>
      <Route exact path='/' component={List} />
      <Route path={'/detail/:id'} component={Detail} />
      {/* <Route path='/blog' component={Blog} /> */}
    </Switch>
  </Router>
}

export default App;
