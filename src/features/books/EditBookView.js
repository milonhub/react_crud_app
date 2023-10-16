import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { editBooks } from './bookSlice';

const EditBookView = () => {

const Navigate =useNavigate();
const dispatch = useDispatch()
const location = useLocation();
const [addtitle, setAddTitle] = useState(location.state.title);
const [addauthor, setAddauthor] = useState(location.state.author);
const [id] = useState(location.state.id)


const handleSubmit = (event) =>{
    event.preventDefault();
    dispatch(editBooks({id, addauthor, addtitle}))
    Navigate("/show book");

}

  return (
    <div className='form_container'>

      <div>
      <h1> Edit Book Pages</h1>
       <form onSubmit={handleSubmit}>
        <label name='title'>Title: </label>
        <input type='text' name= 'title' value={addtitle} onChange={(e) =>setAddTitle(e.target.value)} className='title'></input>
        <p></p>
        <label name='author'>Author: </label>
        <input type='text' name= 'author' value={addauthor} onChange={(event) => setAddauthor(event.target.value)}></input>
        <p></p>
        <button type='Submit'>Add Book</button>
       </form>
      </div>

    </div>
  )
}

export default EditBookView