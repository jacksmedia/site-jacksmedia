import React, { useState, useEffect } from "react"

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const Monat = new Date().toLocaleDateString('en-US', options )
const date1 = new Date('5/12/2021')
const date2 = new Date(Monat)
const Difference_In_Time = date2.getTime() - date1.getTime()
const Difference_In_Days = Difference_In_Time / (1000*60*60*24)
const RoundedResult = Math.round(Difference_In_Days)

const warmUps = ['🛣🧘','🦩🪃','🧣🧘','🫂🏅']
const exercises = ['🦆🌊','🐵🎁','🦇☁️','🦅🌴','🐎🌕','🐠🛸','🐍🍂','🐯🌋','🐉☂️','🐻🔥','🐒🦜','🌬🦮','🦉🌜']
const extras = ['🗼🪜','🎱🌈','🪗🫧','🪑🏹','🕸🎡','🪢🚼','🦎🍭']

const Timecalc = () => {
const [index1, setIndex1] = useState(2);
const [index2, setIndex2] = useState(9);
const [index3, setIndex3] = useState(2);

const DailyUpdater = ({ warmUps }) => {
  const [date, setDate] = useState(new Date());

  useEffect(({ warmUps }) => {
    const intervalId = setInterval(() => {
      setData(new Date());
      setIndex1((index1 + 1) % warmUps.length);
      setIndex2((index2 + 1) % exercises.length);
      setIndex3((index3 + 1) % extras.length);
    }, 24 * 60 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, [index1, warmUps]);
};

  return(
    <div>
      <div>⚓️ Today is
        <span> {Monat}</span>
      </div>
      <div>🤯 It's been
        <span> {RoundedResult} days since this practice began.</span>
      </div>
      <div>🥠 Suggested:
        <span><em>{warmUps[index1]}, </em></span>
        <span><em>{exercises[index2]}, </em></span>
        <span><em>{extras[index3]}</em></span>
      </div>
    </div>
  )
}

export default Timecalc