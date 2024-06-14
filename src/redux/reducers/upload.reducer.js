const uploadReducer = (state = [], action) => {
  if (action.type === 'SET_UPLOADS') {
    return [...action.payload];
  }
  return state;
};
export default uploadReducer;
