import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'


const Header = (props) => {
  const [show, setShow] = useState("none");
  const [isBurger, setBurger] = useState(false)

  function burgerClick(){
    if(isBurger){
      setShow("block")
    }else{
      setShow("none")
    }
    setBurger(!isBurger)
  }

  return(
    <header>
      <div className="icon-title">
        <NavLink to="/" className="burger" onClick={burgerClick}>&#9776;</NavLink>
        <div><p>{props.title}</p></div>
      </div>
      <div className="links" style={{display: show}}>
        <NavLink to="/" className="link">Manage Articles</NavLink>
        <NavLink to="/" className="link">Manage Users</NavLink>
        <NavLink to="/" className="link">Log in</NavLink>
      </div>
    </header>
  )
}



export default Header