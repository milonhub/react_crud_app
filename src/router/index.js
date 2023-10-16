import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import ShowBook from '../features/books/ShowBook';
import Error from '../pages/Error';
import AddBook from '../features/books/AddBook';
import Navbar from '../Navbar/Navbar';
import EditBookView from '../features/books/EditBookView';
const Index = () => {
  return (
    
        <BrowserRouter>
        <Navbar />
             <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/add book' element = {<AddBook />}></Route>
                <Route path='/edit book' element = {<EditBookView />}/>
                <Route path='/show book' element={<ShowBook />} />
                <Route path='/*'  element={<Error />} />
             </Routes>
        
        </BrowserRouter>
    
  )
}

export default Index