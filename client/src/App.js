import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './css/App.css'

import ManageArticles from './components/ManageArticles'
import ManageUsers from './components/ManageUsers'
import UserEdit from './components/manageUsrComp/UserEdit'
import Category from './components/Category'
import ArticleEdit from './components/manageArtComp/ArticleEdit'
import Login from './components/Login'
import Logout from './components/Logout'
import Register from './components/Register'
import News from './components/categories/News'
import NewArticle from './components/manageArtComp/NewArticle'
import Programming from './components/categories/Programming'
import Sport from './components/categories/Sport'

function App() {
  return (
    <>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Category} exact />
          <Route path="/manageArticles" component={ManageArticles} />
          <Route path="/manageUsers" component={ManageUsers} />
          <Route path="/userEdit/:id" component={UserEdit} />
          <Route path="/articleEdit/:id" component={ArticleEdit} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/register" component={Register} />
          <Route path="/news" component={News} />
          <Route path="/newArticle" component={NewArticle} />
          <Route path="/programming" component={Programming} />
          <Route path="/sport" component={Sport} />
        </Switch>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App
