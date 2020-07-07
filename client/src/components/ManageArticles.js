import React from 'react'

import Header from './Header'
import Article from './manageArtComp/Article'

import '../css/Articles.css'

import news from '../img/news.PNG'

const ManageArticles = () => {
  return(
    <>
      <Header
        title="Manage Articles"
      ></Header>
      <div className="ManagArt-main">
        <Article 
          img={news}
          title="Lorem ipsum Lorem"
          description="Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          author="name of the author"
        />
        <Article 
          img={news}
          title="Lorem ipsum Lorem"
          description="Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          author="name of the author"
        />
      </div>
      <div className="ManagArt-create-button">create articel</div>
      
    </>
  )
}

export default ManageArticles