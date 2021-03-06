import React, { useState, useEffect } from 'react'

import Header from '../Header'
import Article from '../manageArtComp/Article'

const News = (props) => {

  const [articles, setArticles] = useState([])

  useEffect(() =>{
    const timer = setTimeout(() => {
      fetchArticles()
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const fetchArticles = () =>{
    fetch(`http://localhost:3000/articles?category_id=1`)
    .then(res => res.json())
    .then(json => {
      setArticles(json)
    })
  }

  return(
    <>
      <Header
        title="NEWS"
      ></Header>
      {       
        articles.map(article => (
          <Article
            key={article.id}
            idArt={article.id}
            title={article.title}
            description={article.description}
            author={article.user_id}
            img={article.img}
          />

        ))
      }
    </>
    
    
  )
}

export default News