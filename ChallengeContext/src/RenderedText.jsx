import React, { useContext } from 'react';
import { AppContext } from './Provider';

const RenderedText = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleDeleteText = (index) => {
    dispatch({ type: 'DELETE_TEXT', payload: index });
  };

  return (
    <div>
      {state.texts.map((text, index) => (
        <div key={index}>
          <p style={{ color: text.color, fontSize: `${text.fontSize}px` }}>{text.text}</p>
          <button onClick={() => handleDeleteText(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default RenderedText;
