import React, {useState} from "react";
import VideoCard from "./VideoCard.jsx";
import PieChart from "./PieChartComponent.jsx";
import data from "./data.json";

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
const Today = new Date().toLocaleDateString('en-US', options )
const dayOneDate = new Date('5/12/2021')
const nowDate = new Date(Today)
const Difference_In_Time = nowDate.getTime() - dayOneDate.getTime()
const Difference_In_Days = Difference_In_Time / (1000*60*60*24)
const RoundedResult = Math.round(Difference_In_Days)

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes}m ${remainingSeconds}s`;
}

const warmUps = data.warmUps
const exercises = data.exercises
const extras = data.extras

const howManyWarmUps = warmUps.length
const howManyExercises = exercises.length
const howManyExtras = extras.length

const todays1 = RoundedResult % howManyWarmUps
const todays2 = RoundedResult % howManyExercises
const todays3 = RoundedResult % howManyExtras

const RandomizerButton = ({ warmUps, exercises, extras }) => {
const [randomChoice1, setRandomChoice1] = useState(null);
const [randomChoice2, setRandomChoice2] = useState(null);
const [randomChoice3, setRandomChoice3] = useState(null);

// Function to get a random choice from a list
const getRandomChoice = (list) => {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
};

// Function to handle button click and set random choices
const handleRandomize = () => {
  setRandomChoice1(getRandomChoice(warmUps));
  setRandomChoice2(getRandomChoice(exercises));
  setRandomChoice3(getRandomChoice(extras));
};

  return (
    <div>
      <div>
        <p>Warm Up: {randomChoice1 ? randomChoice1.title : 'Select a random choice'}</p>
        <p>Exercise: {randomChoice2 ? randomChoice2.title : 'Select a random choice'}</p>
        <p>Extra: {randomChoice3 ? randomChoice3.title : 'Select a random choice'}</p>
      </div>
      <button onClick={handleRandomize}>Randomize Choices</button>
    </div>
  );
};


export default function Timecalc() {
  const [choice1, setChoice1] = useState(warmUps[todays1]);
  const [choice2, setChoice2] = useState(exercises[todays2]);
  const [choice3, setChoice3] = useState(extras[todays3]);

  const summedLengthValues = choice1.seconds + choice2.seconds + choice3.seconds;
  const practiceLength = formatTime(summedLengthValues);

  const COLORS = [choice1.bgc, choice2.bgc, choice3.bgc];

  // Button to  randomize 3 lists' choices
  const handleRandomize = () => {
    const randomWarmUp = getRandomChoice(warmUps);
    const randomExercise = getRandomChoice(exercises);
    const randomExtra = getRandomChoice(extras);
    setChoice1(randomWarmUp);
    setChoice2(randomExercise);
    setChoice3(randomExtra);
  };

  // Pie chart data updated with the randomized choices
  const data = [
    { title: choice1.emojis, value: choice1.seconds, color: choice1.bgc },
    { title: choice2.emojis, value: choice2.seconds, color: choice2.bgc },
    { title: choice3.emojis, value: choice3.seconds, color: choice3.bgc }
  ];

  return (
    <div className="app-layout">
      <h3>⚓️ Today is
        <span> {Today}</span>
      </h3>
      <h3>🤯 It's been
        <span> {RoundedResult} days since this practice began.</span>
      </h3>
      <h3>🥠 Today's Suggested Videos:</h3>

      {/* Rendering the chosen values */}
      <div className="table-row space-around">
        <p>Warm Up</p>
        <p>Exercise</p>
        <p>Extra</p>
      </div>
      <div className="table-row space-around">
        <VideoCard video={choice1} />
        <VideoCard video={choice2} />
        <VideoCard video={choice3} />
      </div>

      <div className="table-row">
        <div>
          <h3>
            Today's practice is {practiceLength} seconds long.
          </h3>
            <RandomizerButton warmUps={warmUps} exercises={exercises} extras={extras} />
        </div>
        <PieChart data={data} />
      </div>

      <div className="table-row space-around">
        <p>Warm Ups</p>
        <p>Exercises</p>
        <p>Extras</p>
      </div>
      {/* Regenerate the lists after randomizing choices */}
      <div className="table-row space-around">
        <div className="smolTable">{warmUps.map((vid) => <VideoCard video={vid} />)}</div>
        <div className="smolTable">{exercises.map((vid) => <VideoCard video={vid} />)}</div>
        <div className="smolTable">{extras.map((vid) => <VideoCard video={vid} />)}</div>
      </div>
    </div>
  );
}
