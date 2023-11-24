import React from 'react';
import Posts from './Posts';
import { PostProvider } from './PostProvider';

const App = () => {
  return (
    <PostProvider>
      <div>
        <h1>My React Context App</h1>
        <Posts />
      </div>
    </PostProvider>
  );
}

export default App;
