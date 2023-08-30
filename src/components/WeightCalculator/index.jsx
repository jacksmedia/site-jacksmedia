import React, { useState } from 'react';

function WeightCalculator() {
  const [grams, setGrams] = useState(0); // Replace with your constant value
  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const calculateResult = () => {
    const result = grams * inputValue;
    return isNaN(result) ? 'Invalid Input' : `${result}g`;
  };

  return (
    <div>
      <label>
        Enter Food Protein: <select name= "food" type="number" value={grams} onChange={(e) => setGrams(e.target.value)}>
          <option value="">?</option>
          <option value="8">Egg 🥚 8g</option>
          <option value="7">Yeast ⚗️ 7g</option>
          <option value="20">Protein Shake 🧉 20g</option>
          <option value="3">Bacon 🥓 3g</option>
          <option value="8.0">Peanut Butter 🥜 8.0g</option>
          <option value="4">Walnuts 🌰 4g</option>
          <option value="22">Chicken 🍗 22g</option>
          <option value="26">Tuna 🐟 26g</option>
        </select>
      </label>
      <br />
      <label>
        How Many Consumed?: <input type="number" value={inputValue} onChange={handleInputChange} />
      </label>
      <br />
      <div>Result: {calculateResult()}</div>
    </div>
  );
}

export default WeightCalculator;
