import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from './bookSlice';
import {useNavigate} from "react-router-dom"


const AddBook = () => {

  const [addtitle , setAddTitle] = useState(null);
  const [addauthor, setAddauthor] = useState(null);
  
  const booksNumber = useSelector((state)=>{return state.booksReducer.books.length})
  
   const dispatch = useDispatch()
   const Navigate = useNavigate();


  const handleTitleChange = (e) =>{
      setAddTitle(e.target.value);
  }

  const handleAuthorChange = (e) =>{
    setAddauthor(e.target.value);
  }

 const handleSubmit = (event) =>{
  event.preventDefault();
  const book = {id: booksNumber + 1, title: addtitle, author: addauthor};
  dispatch(addBook(book))
  setAddauthor("");
  setAddTitle("");
  Navigate("/show book")
  

 }
  return (
    <div className='form_container'>

      <div>
      <h1> Add Book</h1>
       <form onSubmit={handleSubmit}>
        <label name='title'>Title: </label>
        <input type='text' name= 'title' value={addtitle} onChange={handleTitleChange} className='title'></input>
        <p></p>
        <label name='author'>Author: </label>
        <input type='text' name= 'author' value={addauthor} onChange={handleAuthorChange}></input>
        <p></p>
        <button type='Submit'>Add Book</button>
       </form>
      </div>

    </div>
  )
}

export default AddBook