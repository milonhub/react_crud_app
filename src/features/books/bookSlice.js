

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

      addBook: (state,  action) =>{
        state.books.push(action.payload)
      },

      editBooks: (state, action) =>{

         const {id, addauthor, addtitle} = action.payload;
         const existingbook = state.books.filter((book) => {
          return book.id === id;
         })
       
        existingbook[0].title = addtitle;
        existingbook[0].author = addauthor;
      },

      deleteBook: (state, action) =>{
        const id = action.payload;
        state.books = state.books.filter((book)=> book.id !== id)
      },
   }
})

export const {ShowBooks, addBook, deleteBook, editBooks} = booksSlice.actions;
export default booksSlice.reducer;