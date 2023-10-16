import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteBook } from './bookSlice';

const ShowBook = () => {
  const books = useSelector((state)=> {return state.booksReducer.books});

  const dispatch = useDispatch()

  const handleDelete = (id) => {
     dispatch(deleteBook(id))

  }

  return (
    <div className='table_container'>
      <div>
      <h1>List of Books</h1>
      <table>
        <thead>
          <th>ID</th>
          <th>Title</th>
          <th>Author</th>
          <th>Action</th>
        </thead>
        <tbody>
          {books.map((data) =>{
            const {id, title, author} = data;
            return <tr>
              <td>{id}</td>
              <td>{title}</td>
              <td>{author}</td>
              <td>
                <Link to = '/edit book' state = {{title, id, author}}><button>Edit</button></Link>
                <button onClick={()=>{ return handleDelete(id)}}>Delete</button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
      </div>
     
    </div>
  )
}

export default ShowBook