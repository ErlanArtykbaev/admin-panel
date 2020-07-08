import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './css/App.css'

import ManageArticles from './components/ManageArticles'
import ManageUsers from './components/ManageUsers'
import UserEdit from './components/UserEdit'
import Category from './components/Category'

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
        </Switch>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App
