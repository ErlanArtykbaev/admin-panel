import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Category from './components/Category'

import './css/App.css'
import ManageArticles from './components/ManageArticles'
import ManageUsers from './components/ManageUsers'

function App() {
  return (
    <>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Category} exact />
          <Route path="/manageArticles" component={ManageArticles} />
          <Route path="/manageUsers" component={ManageUsers} />
        </Switch>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App
