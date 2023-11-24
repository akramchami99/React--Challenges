import React, { createContext, useContext, useReducer } from 'react';
import { reducer, initialState } from './reducer';

const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PostContext.Provider value={[state, dispatch]}>
      {children}
    </PostContext.Provider>
  );
}

const usePostContext = () => {
  return useContext(PostContext);
}

export { PostProvider, usePostContext };
