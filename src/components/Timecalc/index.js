import React from "react"

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
const Today = new Date().toLocaleDateString('en-US', options )
const dayOneDate = new Date('5/12/2021')
const nowDate = new Date(Today)
const Difference_In_Time = nowDate.getTime() - dayOneDate.getTime()
const Difference_In_Days = Difference_In_Time / (1000*60*60*24)
const RoundedResult = Math.round(Difference_In_Days)

const warmUps = ["🛣🧘","🦩🪃","🧣🧘","🫂🏅"]
const exercises = ["🦆🌊","🍵🐵","🦇☁️","🦅🌴","🐎🌕","🐠🛸","🐍🍂","🐯🌋","🐉☂️","🐻🔥","🐒🦜","🌬🦮","🦉🌜"]
const extras = ["🗼🪜","🎱🌈","🪗🫧","🪑🏹","🕸🎡","🪢🪡","4️⃣🦎"]
const howManyWarmUps = warmUps.length
const howManyExercises = exercises.length
const howManyExtras = extras.length
const slice1 = RoundedResult % howManyWarmUps
const slice2 = RoundedResult % howManyExercises
const slice3 = RoundedResult % howManyExtras

const Timecalc = () => {
  return(
    <div>
      <div>⚓️ Today is
        <span> {Today}</span>
      </div>
      <div>🤯 It's been
        <span> {RoundedResult} days since this practice began.</span>
      </div>
      <div>🥠 Suggested:
        <span>Try videos {warmUps[slice1]}|
        {exercises[slice2]}|{extras[slice3]}</span>
      </div>
    </div>
  )
}

export default Timecalc