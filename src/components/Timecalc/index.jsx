import React, {useState, Link, PureComponent } from "react"
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
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

const choice1 = RoundedResult % howManyWarmUps
const choice2 = RoundedResult % howManyExercises
const choice3 = RoundedResult % howManyExtras

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
  const [choice1, setChoice1] = useState(warmUps[0]);
  const [choice2, setChoice2] = useState(exercises[0]);
  const [choice3, setChoice3] = useState(extras[0]);

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

  // Regenerate the lists after randomizing choices
  const listWarmUps = warmUps.map((warmUp) => (
    <a href={warmUp.url} className="table-cell">
      <div className={`spacing-class ${warmUp.bgc}`}>
        <div className="responsive-text">{warmUp.emojis}&nbsp;</div>
        <p className="unstyled-text responsive-text">{warmUp.title}</p>
        <p className="unstyled-text responsive-text">[{warmUp.length}]</p>
      </div>
    </a>
  ));

  const listExercises = exercises.map((exercise) => (
    <a href={exercise.url} className="table-cell">
      <div className={`spacing-class ${exercise.bgc}`}>
        <div className="responsive-text">{exercise.emojis}&nbsp;</div>
        <p className="unstyled-text responsive-text">{exercise.title}</p>
        <p className="unstyled-text responsive-text">[{exercise.length}]</p>
      </div>
    </a>
  ));

  const listExtras = extras.map((extra) => (
    <a href={extra.url} className="table-cell">
      <div className={`spacing-class ${extra.bgc}`}>
        <div className="responsive-text">{extra.emojis}&nbsp;</div>
        <p className="unstyled-text responsive-text">{extra.title}</p>
        <p className="unstyled-text responsive-text">[{extra.length}]</p>
      </div>
    </a>
  ));

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
        <a href={choice1.url} target="_blank" rel="noreferrer noopener" className={`table-cell special-cell spacing-class ${choice1.bgc}`}>
          <div className="bigger-font">{choice1.emojis}</div>
          <p className="unstyled-text responsive-text">{choice1.title}</p>
          <p className="unstyled-text responsive-text">[{choice1.length}]</p>
        </a>

        <a href={choice2.url} target="_blank" rel="noreferrer noopener" className={`table-cell special-cell spacing-class ${choice2.bgc}`}>
          <div className="bigger-font">{choice2.emojis}</div>
          <p className="unstyled-text responsive-text">{choice2.title}</p>
          <p className="unstyled-text responsive-text">[{choice2.length}]</p>
        </a>

        <a href={choice3.url} target="_blank" rel="noreferrer noopener" className={`table-cell special-cell spacing-class ${choice3.bgc}`}>
          <div className="bigger-font">{choice3.emojis}</div>
          <p className="unstyled-text responsive-text">{choice3.title}</p>
          <p className="unstyled-text responsive-text">[{choice3.length}]</p>
        </a>
      </div>

      <div className="table-row">
        <div>
          <h3>
            Today's practice is {practiceLength} seconds long.
          </h3>
            <RandomizerButton warmUps={warmUps} exercises={exercises} extras={extras} />
        </div>
        <PieChart width={300} height={200}>
          <Pie
            data={data}
            cx={140}
            cy={80}
            startAngle={360}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            labelLine={false}
            label={data.title}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </div>

      <div className="table-row space-around">
        <p>Warm Ups</p>
        <p>Exercises</p>
        <p>Extras</p>
      </div>
      <div className="table-row">
        <div className="smolTable">{listWarmUps}</div>
        <div className="smolTable">{listExercises}</div>
        <div className="smolTable">{listExtras}</div>
      </div>
    </div>
  );
}
