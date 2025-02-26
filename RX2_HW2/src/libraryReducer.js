const initialState = {
  books: [],
  lastBookId: 0,
  totalBooks: 0,
};

const libraryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOK":
        const newBook = { ...action.payload, id: state.lastBookId + 1 };
        return {
          ...state,
          books: [...state.books, newBook],
          totalBooks: state.totalBooks + 1,
          lastBookId: state.lastBookId + 1, 
        };
    case "REMOVE_BOOK":
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
        totalBooks: state.totalBooks - 1,
      };
    default:
      return state;
  }
};

export default libraryReducer;
