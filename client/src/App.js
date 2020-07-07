import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Category from './components/Category'

import './css/App.css'

function App() {
  return (
    <>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Category} exact />
          
        </Switch>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App
