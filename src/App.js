import { Switch, Route, Redirect } from 'react-router-dom';

import BlogPage from './pages/BlogPage';
import ManagePage from './pages/ManagePage';
import FormPage from './pages/FormPage';
import SinglePage from './pages/SinglePage';

import 'bootstrap/dist/css/bootstrap.min.css';

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

      <Route path='/life'>
        <SinglePage/>
      </Route>

      <Route path='/knowledge'>
        <SinglePage/>
      </Route>

      <Route path='/sports'>
        運動紀錄
      </Route>

      <Route path='/journey'>
        旅行紀念
      </Route>

      <Route path='/box'>
        開箱分享
      </Route>

      <Route path='/photo'>
        攝影作品
      </Route>

      <Route path='*'>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default App;
