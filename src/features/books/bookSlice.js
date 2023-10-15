import ShowBook from "./ShowBook";

const {createSlice} =require("@reduxjs/toolkit");
const initialBooks = {
    books: [
        {id: 1, title: 'love bangladesh', author: 'milon'},
        {id: 2, title: ' bangladeshi girl', author: 'shadot'},


    ]
}

export const booksSlice = createSlice({
   name: 'books',
   initialState: initialBooks,
   reducers: {
      ShowBooks: (state) => state,
   }
})

export const {ShowBooks} = booksSlice.actions;
export default booksSlice.reducer;