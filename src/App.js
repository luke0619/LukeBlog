import { Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import BlogPage from './pages/BlogPage';
import ManagePage from './pages/ManagePage';
import FormPage from './pages/FormPage';
import SinglePage from './pages/SinglePage';
import IdPage from './pages/IdPage';

function App() {
  return (
    <Switch>
      <Route path='/' exact>
        <BlogPage />
      </Route>

      <Route path='/manager'>
        <ManagePage />
      </Route>

      <Route path='/new-form'>
        <FormPage />
      </Route>

      <Route path='/single/:typeId'>
        <SinglePage/>
      </Route>

      <Route path='/unique/:articleId'>
        <IdPage/>
      </Route>

      <Route path='*'>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default App;
