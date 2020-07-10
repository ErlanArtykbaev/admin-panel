import React, { useState, useEffect } from 'react'
import {NavLink} from 'react-router-dom'

import Header from './Header'
import Article from './manageArtComp/Article'

import '../css/Articles.css'



const ManageArticles = () => {

  const [articles, setArticles] = useState([])

  useEffect(() =>{
    const timer = setTimeout(() => {
      fetchArticles()
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const fetchArticles = () =>{
    fetch('http://localhost:3000/articles')
    .then(res => res.json())
    .then(json => {
      setArticles(json)
    })
  }

  return(
    <>
      <Header
        title="Manage Articles"
      ></Header>
      <div className="ManagArt-main">
      {       
        articles.map(article => (
          <Article
            key={article.id}
            idArt={article.id}
            category_id={article.category_id}
            title={article.title}
            description={article.description}
            user_id={article.user_id}
            img={article.img}
          />

        ))
      }

      </div>
      <NavLink to="/newArticle" className="ManagArt-create-button">create articel</NavLink>
      
    </>
  )
}

export default ManageArticles