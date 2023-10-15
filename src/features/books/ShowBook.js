import React from 'react'

import { useSelector } from 'react-redux'

const ShowBook = () => {
  const books = useSelector((state)=> state.bookReducer)
  return (
    <div className='table_container'>
      <h1>List of Books</h1>
      <table>
        <thead>
          <th>ID</th>
          <th>Title</th>
          <th>Author</th>
          <th>Action</th>
        </thead>
      </table>
    </div>
  )
}

export default ShowBook