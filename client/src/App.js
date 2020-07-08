import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './css/App.css'

import ManageArticles from './components/ManageArticles'
import ManageUsers from './components/ManageUsers'
import UserEdit from './components/UserEdit'
import Category from './components/Category'
import ArticleEdit from './components/ArticleEdit'

function App() {
  return (
    <>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Category} exact />
          <Route path="/manageArticles" component={ManageArticles} />
          <Route path="/manageUsers" component={ManageUsers} />
          <Route path="/userEdit" component={UserEdit} />
          <Route path="/articleEdit" component={ArticleEdit} />
        </Switch>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App
