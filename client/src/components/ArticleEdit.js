import React from 'react'
import Header from './Header'

const ArticleEdit = (props) => {
  return(
    <>
      <Header
        title="Article Edit"
      />
      <div className="ArticleEdit">
        <form>
          <label for="title">title:</label>
          <input 
            placeholder="title" 
            id="title" 
            type="text" 
            name="title"
          />
          <label for="description">description:</label>
          <textarea 
            placeholder="description" 
            id="description" 
            name="description"
          ></textarea>
          <input
            placeholder="img source"
            type="text"
            name="img"
          />
          <label for="category">category:</label>
          <select id="category">
            <option value="news">news</option>
            <option value="sport">sport</option>
            <option value="programming">programming</option>
            <option value="technology">technology</option>
          </select>
          <input className="ArticleEdit-save-button" type="submit" value="save" />
        </form>
      </div>
    </>
    
  )
}

export default ArticleEdit