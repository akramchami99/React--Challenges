import React, { useContext, useState } from 'react';
import { AppContext } from './Provider';

const TextForm = () => {
  const { dispatch } = useContext(AppContext);
  const [text, setText] = useState('');
  const [color, setColor] = useState('palevioletred');
  const [fontSize, setFontSize] = useState(15);

  const handleAddText = () => {
    dispatch({
      type: 'ADD_TEXT',
      payload: { text, color, fontSize },
    });

    setText('');
  };

  return (
    <div>
      <label>
        Saisir le texte :
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      </label><br/>
      <label>
        Sélectionnez un rendu :
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="palevioletred">palevioletred</option>
          <option value="tomato">tomato</option>
        </select>
      </label><br/>
      <label>
        Taille du texte :
        <select value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))}>
          {[15, 16, 17, 18, 19, 20].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </label>
      <button onClick={handleAddText}>Valider</button>
    </div>
  );
};

export default TextForm;
