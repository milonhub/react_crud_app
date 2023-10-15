import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "../features/books/bookSlice";

const store = configureStore({
    reducer:{
        booksReducer: bookSlice
    }
})

export default store;