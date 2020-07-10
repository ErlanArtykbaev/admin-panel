import React from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

const Article = (props) => {

  const deleteArt = (idArt) => {
    Axios.delete(`http://localhost:3000/articles/${idArt}`)
    .then(res => {
      console.log(res)
    })
    .then(err => {
      console.log(err)
    })
  }

  return(
    <div className="Article">
      <div className="Article-main">
        <img alt="newPhoto" src={props.img}></img>
        <h2>{props.title}</h2>
        <p> {props.description} </p>
        <p className="Article-author"> {props.user_id} </p>
      </div>
      <div className="Article-buttons">
        <Link to={`/articleEdit/${props.idArt}`} className="edit-button">edit</Link>
        <Link to="/" onClick={() => deleteArt(props.idArt)} className="delete-button">delete</Link>
      </div>
    </div>
    
  )
}

export default Article