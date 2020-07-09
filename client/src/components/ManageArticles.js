import React, { useState, useEffect } from 'react'

import Header from './Header'
import Article from './manageArtComp/Article'

import '../css/Articles.css'



const ManageArticles = () => {

  const [articles, setArticles] = useState([])
  const [images, setImages] = useState([])

  useEffect(() =>{
    fetch('http://localhost:3001/articles')
    .then(res => res.json())
    .then(json => {
      setArticles(json)
    })
    let imgs = []
    
  })

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
            title={article.title}
            description={article.description}
            author={article.user_id}
            img={window.URL('http://localhost:3001/' + article.img) }
          />
        ))
      }

      </div>
      <div className="ManagArt-create-button">create articel</div>
      
    </>
  )
}

export default ManageArticles