import React, { useState } from 'react';

function ProteinCalculator() {
  const [grams, setGrams] = useState('');
  const [inputValue, setInputValue] = useState(0);
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addResult = (inputValue, grams) => {
    const result = isNaN(inputValue) ? 'Invalid Input' : `${inputValue * grams}g`;
    setResults([...results, result]);
  };

  const calculateTotalProtein = () => {
    return results.reduce((total, result) => {
      const gramsValue = parseFloat(result);
      if (!isNaN(gramsValue)) {
        return total + gramsValue;
      }
      return total;
    }, 0);
  };

  return (
    <div>
      <label>
        Enter Food Protein: 
        <select name="grams" value={grams} onChange={(e) => setGrams(e.target.value)}>
          <option value="">?</option>
          <option value="8">Egg 🥚 8g</option>
          <option value="7">Yeast ⚗️ 7g</option>
          <option value="20">Protein Shake 🧉 20g</option>
          <option value="3">Bacon 🥓 3g</option>
          <option value="8">Peanut Butter 🥜 8.0g</option>
          <option value="4">Walnuts 🌰 4g</option>
          <option value="22">Chicken 🍗 22g</option>
          <option value="26">Tuna 🐟 26g</option>
        </select>
      </label>
      <br />
      <label>
        How Many Consumed?: <input name="inputValue" type="number" value={inputValue} onChange={handleInputChange} />
      </label>
      <br />
      <button onClick={() => setResults([])}>Clear List</button>
      <button onClick={() => addResult(inputValue, parseFloat(grams))}>Add to List</button>

      <div>
        <h4>Protein Portions Today:</h4>
        <ul>
          {results.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
        <br />
        <div>
          <h2>Total Protein Today: {calculateTotalProtein()}g</h2>
        </div>
      </div>
    </div>
  );
}

export default ProteinCalculator;
