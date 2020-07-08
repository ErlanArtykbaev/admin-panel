import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'


const Header = (props) => {
  const [show, setShow] = useState("none");
  const [isBurger, setBurger] = useState(false)

  function burgerClick(){
    if(isBurger){
      setShow("block")
      setBurger(false)
    }else{
      setShow("none")
      setBurger(true)
    }
  }

  return(
    <header>
      <div className="icon-title">
        <div className="burger" onClick={burgerClick}>&#9776;</div>
        <div><p>{props.title}</p></div>
      </div>
      <div className="links" style={{display: show}}>
        <NavLink to="/" className="link">Categories</NavLink>
        <NavLink to="/manageArticles" className="link">Manage Articles</NavLink>
        <NavLink to="/manageUsers" className="link">Manage Users</NavLink>
        <NavLink to="/login" className="link">Log in</NavLink>
        <NavLink to="/logout" className="link">Log out</NavLink>
        <NavLink to="/register" className="link">Register</NavLink>
      </div>
    </header>
  )
}



export default Header