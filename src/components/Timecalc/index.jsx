import { useState } from 'react';
import { intervalToDuration, formatDuration } from 'date-fns';
import VideoCard from './VideoCard';
import PieChartComponent from './PieChartComponent';
import RandomizerButton from './RandomizerButton';
import data from './data.json';

// original Date count calculation
const nowDate = new Date();
const dayOneDate = new Date('5/12/2021');
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const Today = nowDate.toLocaleDateString('en-US', options);

const Difference_In_Time = nowDate.getTime() - dayOneDate.getTime();
const Difference_In_Days = Difference_In_Time / (1000 * 60 * 60 * 24);
const DaysCountedSinceStart = Math.round(Difference_In_Days);

// date-fns special sauce
function getDetailedDistance(startDate) {
  
  // 1. Get raw duration (up to days)
  const duration = intervalToDuration({
    start: startDate,
    end: nowDate
  })

  // 2. Convert days to weeks + days
  const weeks = Math.floor((duration.days ?? 0) / 7)
  const days = (duration.days ?? 0) % 7

  // 3. Format duration including weeks
  const formatted = formatDuration({
    years: duration.years,
    months: duration.months,
    weeks,
    days
  }, {
    format: ['years', 'months', 'weeks', 'days']
  })

  return `${formatted}`
}
const howLong = getDetailedDistance(dayOneDate);


// displays minutes & seconds of YT video
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes}m ${remainingSeconds}s`;
}

// measures and iterates thru video sets
const warmUps = data.warmUps;
const exercises = data.exercises;
const extras = data.extras;

const howManyWarmUps = warmUps.length; // number of items in the column
const howManyExercises = exercises.length; // ^
const howManyExtras = extras.length; // ^

// iteration counters per list, uses division remainder (% aka modulo)
const todays1 = DaysCountedSinceStart % howManyWarmUps;
const todays2 = DaysCountedSinceStart % howManyExercises;
const todays3 = DaysCountedSinceStart % howManyExtras;

// looks 1 day ahead, similar to above
const tomorrows1 = (todays1 + 1) % howManyWarmUps;
const tomorrows2 = (todays2 + 1) % howManyExercises;
const tomorrows3 = (todays3 + 1) % howManyExtras;


// main component logic

const Timecalc = () => {
  // choices for today's videos
  const [choice1, setChoice1] = useState(warmUps[todays1]);
  const [choice2, setChoice2] = useState(exercises[todays2]);
  const [choice3, setChoice3] = useState(extras[todays3]);

  // choices for tomorrow's videos
  const [choiceA, setChoiceA] = useState(warmUps[tomorrows1]); // useState requires matched pair
  const [choiceB, setChoiceB] = useState(exercises[tomorrows2]); // ^
  const [choiceC, setChoiceC] = useState(extras[tomorrows3]); // ^

  // total time from set of 3 videos
  const summedLengthValues = choice1.seconds + choice2.seconds + choice3.seconds;
  const practiceLength = formatTime(summedLengthValues);

  // dynamic reassignement of 3 video set
  const handleRandomize = () => {
    const randomWarmUp = warmUps[Math.floor(Math.random() * warmUps.length)];
    const randomExercise = exercises[Math.floor(Math.random() * exercises.length)];
    const randomExtra = extras[Math.floor(Math.random() * extras.length)];
    setChoice1(randomWarmUp);
    setChoice2(randomExercise);
    setChoice3(randomExtra);
  };

  // Pie chart data updated with the randomized choices
  const dataForPieChart = [
    { title: choice1.emojis, value: choice1.seconds, color: choice1.bgc },
    { title: choice2.emojis, value: choice2.seconds, color: choice2.bgc },
    { title: choice3.emojis, value: choice3.seconds, color: choice3.bgc }
  ];

  return (
    <div className="app-layout">
      <h3>⚓️ Today is <span>{Today}</span></h3>
      <h3>🤯 It's been <span> {DaysCountedSinceStart} days since this practice began.</span></h3>
      <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;... in other words,<span> it's been {howLong}.</span></h3>
      <h3>🥠 Today's Suggested Videos:</h3>

      {/* daily practice, 1 from each column in JSON */}
      <div className="row">
        <p>Warm Up</p>
        <p>Exercises</p>
        <p>Extras</p>
      </div>
      <div className="row">
        <div className='column p-3'>
          <VideoCard video={choice1} />
        </div>
        <div className='column'>
          <VideoCard video={choice2} />
        </div>
        <div className='column'>
          <VideoCard video={choice3} />
        </div>
      </div>

      {/* Data on today's practice */}
      <div className="row">
        <div className='col-4 p-3'>
          <h3>Today's practice is {practiceLength} long.</h3>
          <RandomizerButton handleRandomize={handleRandomize} />
          <p>(Please refresh for original recommendations.)</p>
        </div>
        <div className='col-8'>
          <PieChartComponent data={dataForPieChart} />
        </div>
      </div>
 
       {/* Tomorrow's practice videos, vs today's */}
      <h2>Tomorrow's Videos</h2>
      <div className="row">
        <div className='column p-3'>
          <VideoCard video={choiceA} />
        </div>
        <div className='column'>
          <VideoCard video={choiceB} />
        </div>
        <div className='column'>
          <VideoCard video={choiceC} />
        </div>
      </div> 

      
      {/* Titles for the set columns */}
      <h2>All Videos</h2>
      <div className="row">
        <p>Warm Ups</p>
        <p>Exercises</p>
        <p>Extras</p>
      </div>

      
      {/* Mapping of every object in ./data.json */}
      <div className="row">
        <div className="column">
          <div className="video-card-wrapper">
            {warmUps.map((item, index) => <VideoCard key={`warmup-${index}`} video={item} />)}
          </div>
        </div>
        <div className="column">
          <div className="video-card-wrapper">
            {exercises.map((item, index) => <VideoCard key={`exercise-${index}`} video={item} />)}
            </div>
        </div>
        <div className="column">
          <div className="video-card-wrapper">
            {extras.map((item, index) => <VideoCard key={`extra-${index}`} video={item} />)}
            </div>
        </div>
      </div>

      {/* Count of the column items */}
      <div className="row">
        <p>Total Warm Up = <em>{howManyWarmUps}</em></p>
        <p>Total Exercises = <em>{howManyExercises}</em></p>
        <p>Total Extras = <em>{howManyExtras}</em></p>
      </div>

      {/* Total permutations of all objects in ./data.json */}
      <div className="row">
        <p>Unique combinations of practices: <em>{howManyWarmUps * howManyExercises * howManyExtras}</em></p>
      </div>

    </div>
  );
};

export default Timecalc;