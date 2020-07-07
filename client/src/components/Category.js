import React from 'react'
import { NavLink } from 'react-router-dom'

import Header from './Header'

const Category = () => {
  return(
    <div className="body">
      <Header
        title="Category"
      ></Header>
      <div className="Category-main">
        <NavLink className="Category-button" to="/news">news</NavLink>
        <NavLink className="Category-button" to="/sport">sport</NavLink>
        <NavLink className="Category-button" to="/programming">programming</NavLink>
        <NavLink className="Category-button" to="/technology">technology</NavLink>
      </div>
      
    </div>
  )
}

export default Category