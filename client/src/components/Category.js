import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import Header from './Header'

const Category = () => {
  const [categs, setCategs] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchCategs()
    }, 1500)

    return () => clearTimeout(timer)
  },[])

  const fetchCategs = () => {
    fetch("http://localhost:3000/category")
    .then(res => res.json())
    .then(json => {
      setCategs(json)
    })
  }

  const linkTo = "/"

  return(
    <div className="body">
      <Header
        title="Category"
      ></Header>
      <div className="Category-main">
      {
        categs.map(data => (
          <NavLink key={data.id} className="Category-button" to={linkTo + data.title} >{data.title}</NavLink>
        ))
      }
      </div>
      
    </div>
  )
}

export default Category