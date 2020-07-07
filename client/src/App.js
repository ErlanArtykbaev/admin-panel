import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Category from './components/Category'

import './css/App.css'
import ManageArticles from './components/ManageArticles'

function App() {
  return (
    <>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Category} exact />
          <Route path="/manageArticles" component={ManageArticles} />
          
        </Switch>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App
