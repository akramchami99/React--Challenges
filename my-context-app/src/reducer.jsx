const initialState = {
    posts: [],
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_POST':
        return {
          ...state,
          posts: state.posts.concat(action.post),
        };
  
      case 'SHUFFLE':
        const posts = [...state.posts];
        posts.sort(() => Math.random() - 0.5);
        return {
          ...state,
          posts: posts,
        };
  
      default:
        return state;
    }
  };
  
  export { initialState, reducer };
  