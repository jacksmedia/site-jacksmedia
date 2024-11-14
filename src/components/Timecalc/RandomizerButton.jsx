// RandomizerButton.jsx
import React from 'react';

const RandomizerButton = ({ handleRandomize }) => {
  return (
    <button onClick={handleRandomize}>Randomize Choices</button>
  );
};

export default RandomizerButton;
