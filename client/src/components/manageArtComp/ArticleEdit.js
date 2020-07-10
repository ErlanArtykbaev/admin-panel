import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'
import Axios from 'axios'

const ArticleEdit = (props) => {

  const [id, setId] = useState(0)
  const [title, setTitle] = useState("")
  const [category_id, setCategory_id] = useState(0)
  const [description, setDescription] = useState("")
  const [user_id, setUser_id] = useState(0)
  const [img, setImg] = useState("")

  
 const editArticle = (id, category_id, user_id, title, description, img) => {

    Axios({
      method: 'PATCH',
      url: `http://localhost:3000/articles/${id}`,
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

  useEffect(()=>{
    let urlId = props.match.params.id
    fetch(`http://localhost:3000/articles/${urlId}`)
    .then(res => res.json())
    .then(json => {
      setId(json.id)
      setCategory_id(json.category_id)
      setUser_id(json.user_id)
      setDescription(json.description)
      setTitle(json.title)
      setImg(json.img)
    })
    
  },[props.match.params.id])

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
            value={title}
            onChange={(e)=> updateTitle(e.target.value)}
          />
          <label htmlFor="description">description:</label>
          <textarea 
            value={description}
            placeholder="description" 
            id="description" 
            name="description"
            onChange={(e) => updateDescription(e.target.value)}
          ></textarea>
          <input
            value={img}
            placeholder="img source"
            type="text"
            name="img"
            onChange={(e)=> updateImg(e.target.value)}
          />
          <label htmlFor="category">category:</label>
          <input 
            placeholder="category_id" 
            id="category" 
            name="category" 
            onChange={(e) => updateCategory_id(e.target.value)}  
            value={category_id}
          />
          <input
            value={user_id}
            placeholder="user_id"
            type="text"
            name="user_id"
            onChange={(e)=> updateUser_id(e.target.value)}
          />
          <Link to="/">
            <button 
              className="ArticleEdit-save-button" 
              onClick={() => editArticle(id, category_id, user_id, title, description, img)}
            >
              save
            </button>
          </Link>
          
        </form>
      </div>
    </>
    
  )

}
export default ArticleEdit