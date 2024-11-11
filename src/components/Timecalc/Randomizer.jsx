import React, { useState } from 'react';

const RandomizerButton = ({ warmUps, exercises, extras }) => {
  const [choice1, setChoice1] = useState('');
  const [choice2, setChoice2] = useState('');
  const [choice3, setChoice3] = useState('');

  // Function to get a random choice from a list
  const getRandomChoice = (list) => {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
  };

  // Function to handle button click and set random choices
  const handleRandomize = () => {
    setChoice1(getRandomChoice(warmUps));
    setChoice2(getRandomChoice(exercises));
    setChoice3(getRandomChoice(extras));
  };

  return (
    <div>
      <div>
        <h3>Choice 1: {choice1}</h3>
        <h3>Choice 2: {choice2}</h3>
        <h3>Choice 3: {choice3}</h3>
      </div>
      <button onClick={handleRandomize}>Randomize Choices</button>
    </div>
  );
};

export default Randomizer;
