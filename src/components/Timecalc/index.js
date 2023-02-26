import React, { useState, useEffect } from "react"

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const Today = new Date().toLocaleDateString('en-US', options )
const date1 = new Date('5/12/2021')
const date2 = new Date(Today)
const Difference_In_Time = date2.getTime() - date1.getTime()
const Difference_In_Days = Difference_In_Time / (1000*60*60*24)
const RoundedResult = Math.round(Difference_In_Days)

const warmUps = ["🛣🧘","🦩🪃","🧣🧘","🫂🏅"]
const exercises = ["🦆🌊","🐵🎁","🦇☁️","🦅🌴","🐎🌕","🐠🛸","🐍🍂","🐯🌋","🐉☂️","🐻🔥","🐒🦜","🌬🦮","🦉🌜"]
const extras = ["🗼🪜","🎱🌈","🪗🫧","🪑🏹","🕸🎡","🪢🚼","🦎🍭"]
const howManyWarmUps = warmUps.length;
const howManyExercises = exercises.length;
const howManyExtras = extras.length;
const arrayResult1 = "";
const arrayResult2 = "";
const arrayResult3 = "";

const Timecalc = () => {

const DailyUpdater = ({}) => {
  const [date, setDate] = useState(new Date());
  const arrayResult1 = warmUps[howManyWarmUps];
  const arrayResult2 = exercises[howManyExercises];
  const arrayResult3 = extras[howManyExtras];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setData(new Date());
    }, 24 * 60 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);
};

  return(
    <div>
      <div>⚓️ Today is
        <span> {Today}</span>
      </div>
      <div>🤯 It's been
        <span> {RoundedResult} days since this practice began.</span>
      </div>
      <div>🥠 Suggested:
        <span><em>{arrayResult1} of {howManyWarmUps}| </em></span>
        <span><em>{arrayResult2} of {howManyExercises}| </em></span>
        <span><em>{arrayResult3} of {howManyExtras}</em></span>
      </div>
    </div>
  )
}

export default Timecalc