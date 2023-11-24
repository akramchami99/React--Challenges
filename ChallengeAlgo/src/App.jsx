import React, { useState } from 'react';


const App = () => {
  const [numbers, setNumbers] = useState([]);
  const [pairs, setPairs] = useState([]);

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 30) + 1;
    setNumbers([...numbers, randomNumber]);
  };

  const generatePairs = () => {
    const pairsArray = [];
    let tempNumbers = [...numbers];

    while (tempNumbers.length > 0) {
      const pair = tempNumbers.splice(0, 2);
      pairsArray.push(pair);
    }

    setPairs(pairsArray);
  };

  return (
    <div className="App">
      <h1>Generate Pairs</h1>
      <div>
        <button onClick={generateRandomNumber}>Add</button>
        <p>List: {numbers.join(', ')}</p>
      </div>
      <button onClick={generatePairs}>Generate Pairs</button>
      <div>
        {pairs.map((pair, index) => (
          <p key={index}>{pair.join(', ')}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
