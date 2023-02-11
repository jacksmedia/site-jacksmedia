import * as React from "react"

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const Monat = new Date().toLocaleDateString('en-US', options )
const date1 = new Date('5/12/2021')
const date2 = new Date(Monat)
const Difference_In_Time = date2.getTime() - date1.getTime()
const Difference_In_Days = Difference_In_Time / (1000*60*60*24)
const RoundedResult = Math.round(Difference_In_Days)

const warmUps = ['🛣🧘','🦩🪃','🧣🧘','🫂🏅']
const nextIndexWarmUps = 0
const nextIndexExercises = 0
const nextIndexExtras = 0
const exercises = ['🦆🌊','🐵🎁','🦇☁️','🦅🌴','🐎🌕','🐠🛸','🐍🍂','🐯🌋','🐉☂️','🐻🔥','🐒🦜','🌬🦮','🦉🌜']
const extras = ['🗼🪜','🎱🌈','🪗🫧','🪑🏹','🕸🎡','🪢🚼','🦎🍭']

const Timecalc = () => {
function chooseWarmUp (warmUps) {
  if ( nextIndexWarmUps >= warmUps.length ) {
    nextIndexWarmUps = 0
  }
  nextIndexWarmUps++
  return warmUps[nextIndexWarmUps-1]
}
function chooseExercise (exercises) {
  if ( nextIndexExercises >= exercises.length ) {
    nextIndexExercises = 0
  }
  nextIndexExercises++
  return warmUps[nextIndexExercises-1]
}
function chooseExtras (Extras) {
  if ( nextIndexExtras >= Extras.length ) {
    nextIndexExtras = 0
  }
  nextIndexExtras++
  return Extras[nextIndexExtras-1]
}

  return(
    <div>
      <div>⚓️ Today is
        <span> {Monat}</span>
      </div>
      <div>🤯 It's been
        <span> {RoundedResult} days since this practice began.</span>
      </div>
      <div>🥠 Suggested:
        <span><em> {warmUps[nextIndexWarmUps]}, </em></span>
        <span><em>{exercises[nextIndexExercises]}, </em></span>
        <span><em>{extras[nextIndexExtras]}</em></span>
      </div>
    </div>
  )
}
export default Timecalc