export const initialState = [];

export const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "edit":
      return state.map((contect) =>
        contect.id === action.payload.id ? action.payload : contect
      );

    case "delete":
      return state.filter((contect) => contect.id !== action.payload);
    case "toggleFavorite":
      return state.map((contect) =>
        contect.id === action.payload
          ? { ...contect, favorite: !contect.favorite }
          : contect
      );
    default:
      return state;
  }
};
