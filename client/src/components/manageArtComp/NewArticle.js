import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import Axios from 'axios'

const NewArticle = (props) => {

  const [id, setId] = useState(0)
  const [title, setTitle] = useState("username")
  const [category_id, setCategory_id] = useState("password")
  const [description, setDescription] = useState("")
  const [user_id, setUser_id] = useState("")
  const [img, setImg] = useState("")

  
  const addArticle = (category_id, user_id, title, description, img) => {
    
    fetch("http://localhost:3000/articles")
    .then(res => res.json())
    .then(json => {
      let maxId = json[json.length - 1].id + 1
      setId(maxId)
    })

    Axios({
      method: 'POST',
      url: 'http://localhost:3000/articles',
      data: {
        id: id,
        category_id: category_id,
        user_id: user_id,
        title: title,
        description: description,
        img: img
      },
      validateStatus: (status) => {
        return true; // I'm always returning true, you may want to do it depending on the status received
      }
    })
    .then(res => {
      console.log(res)
    })
    .then(err => {
      console.log(err)
    })
  }
  
  const updateTitle = (e) => {
    setTitle(e)
  }

  const updateCategory_id = (e) => {
    setCategory_id(e)
  }

  const updateUser_id = (e) => {
    setUser_id(e)
  }

  const updateDescription = (e) => {
    setDescription(e)
  }

  const updateImg = (e) => {
    setImg(e)
  }


  return(
    <>
      <Header
        title="New Article"
      />
      <div className="ArticleEdit">
        <form>
          <label htmlFor="title">title:</label>
          <input 
            placeholder="title" 
            id="title" 
            type="text" 
            name="title"
            onChange={(e)=> updateTitle(e.target.value)}
          />
          <label htmlFor="description">description:</label>
          <textarea 
            placeholder="description" 
            id="description" 
            name="description"
            onChange={(e) => updateDescription(e.target.value)}
          ></textarea>
          <input
            placeholder="img source"
            type="text"
            name="img"
            onChange={(e)=> updateImg(e.target.value)}
          />
          <label htmlFor="category">category:</label>
          <select id="category" onChange={(e)=> updateCategory_id(e.target.value)} >
            <option value="1">news</option>
            <option value="2">sport</option>
            <option value="3">programming</option>
            <option value="4">technology</option>
          </select>
          <input
            placeholder="user_id"
            type="text"
            name="user_id"
            onChange={(e)=> updateUser_id(e.target.value)}
          />
          <Link to="/">
            <button className="ArticleEdit-save-button" onClick={()=> addArticle(category_id, user_id,title, description, img)}>save</button>
          </Link>
          
        </form>
      </div>
    </>
    
  )
}

export default NewArticle