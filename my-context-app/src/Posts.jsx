import React from 'react';
import { usePostContext } from './PostProvider';

const Posts = () => {
  const [state, dispatch] = usePostContext();

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => dispatch({ type: 'ADD_POST', post: Math.random() })}>Add post</button>
      <button onClick={() => dispatch({ type: 'SHUFFLE' })}>Shuffle</button>

      {state.posts.length > 0 && (
        <ul>
          {state.posts.map((post, i) => (
            <li key={i}>{post}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Posts;
