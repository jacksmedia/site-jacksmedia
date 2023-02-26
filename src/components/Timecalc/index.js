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

const Timecalc = () => {
const todaysWarmUps = warmUps[howManyWarmUps];
const todaysExercises = exercises[howManyExercises];
const todaysExtras = extras[howManyExtras];
  return(
    <div>
      <div>⚓️ Today is
        <span> {Today}</span>
      </div>
      <div>🤯 It's been
        <span> {RoundedResult} days since this practice began.</span>
      </div>
      <div>🥠 Suggested:
        <span><em>Try video {RoundedResult % howManyWarmUps} of {warmUps}| </em></span>
        <span><em>Try video {RoundedResult % howManyExercises} of {exercises}| </em></span>
        <span><em>Try video {RoundedResult % howManyExtras} of {extras}</em></span>
      </div>
    </div>
  )
}

export default Timecalc