import React from 'react'

import { useSelector } from 'react-redux'

const ShowBook = () => {
  const books = useSelector((state)=> {return state.booksReducer.books})
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
                <button>Edit</button>
                <button>Delete</button>
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