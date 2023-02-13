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
const DailyUpdater = ({ warmUps }) => {
  const [index, setIndex] = useState(0);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setData(new Date());
      setIndex((index + 1) % warmUps.length);
    }, 24 * 60 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, [index, warmUps]);
  return(
    <div>🥠 Suggested:
      <span><em>{warmUps[index]}, </em></span>
      <span><em>{}, </em></span>
      <span><em>{}</em></span>
    </div>
  );
};


  return(
    <div>
      <div>⚓️ Today is
        <span> {Monat}</span>
      </div>
      <div>🤯 It's been
        <span> {RoundedResult} days since this practice began.</span>
      </div>
    </div>
  )
}

export default Timecalc