import React, {Link, useState} from "react"

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
const Today = new Date().toLocaleDateString('en-US', options )
const dayOneDate = new Date('5/12/2021')
const nowDate = new Date(Today)
const Difference_In_Time = nowDate.getTime() - dayOneDate.getTime()
const Difference_In_Days = Difference_In_Time / (1000*60*60*24)
const RoundedResult = Math.round(Difference_In_Days)

const warmUps = [
{"url":"https://youtu.be/X3-gKPNyrTA?si=5uiflXNft6zCyvx6&t=25",
"emojis":"🛣🎒",
"title":"Yoga For Neck, Shoulders, Upper Back",
"length":"10m37s",
"bgc":"cornflowerblue"},
{"url":"https://youtu.be/50txkOrJn9o?t=87","emojis":"🦩🪃","title":"Tai Chi 5 Minutes a Day - Warm Up","length":"10m44s","bgc":"lemonchiffon"},
{"url":"https://youtu.be/SedzswEwpPw?t=51","emojis":"🧣🎒","title":"Yoga for Neck and Shoulder Relief","length":"17m37s","bgc":"cornflowerblue"},
{"url":"https://youtu.be/d-PTjUgMrig?si=vTk4v0k2vFpH-FYz&t=79","emojis":"🔥🟫","title":"Sun & Earth Purification Qigong","length":"10m4s","bgc":"mediumaquamarine"},
{"url":"https://youtu.be/jOfshreyu4w?t=41","emojis":"🫂🏅","title":"Quick Stress Fix - 5 Minute Sequence","length":"6m18s","bgc":"cornflowerblue"}
]
const exercises = [
{"url":"https://youtu.be/3GtFp6sz5zM?t=68","emojis":"💨🍯","title":"Qigong to Purge and Tonify","length":"20m15s","bgc":"mediumaquamarine"},
{"url":"https://youtu.be/cEOS2zoyQw4?t=89","emojis":"🦆🌊","title":"Tai Chi 5 Minutes a Day Module 01","length":"11m","bgc":"lemonchiffon"},
{"url":"https://youtu.be/HMbT-CPVl2k?t=49","emojis":"🍵🐵","title":"MOOD LIFTER","length":"15m40s","bgc":"mediumaquamarine"},
{"url":"https://youtu.be/enk0bOv-gF8?t=16","emojis":"🦇☁️","title":"Tai Chi 5 min a day module 02","length":"6m20s","bgc":"lemonchiffon"},
{"url":"https://youtu.be/IyINAjEoTIs?t=85","emojis":"🚪🦅","title":"Qigong for Beginners","length":"30m3s","bgc":"mediumaquamarine"},
{"url":"https://www.youtube.com/watch?v=OPcZlXYcdMA?t=31","emojis":"🐎🌕","title":"Tai chi 5 Minutes a Day Module 03","length":"9m8s","bgc":"lemonchiffon"},
{"url":"https://youtu.be/8wddPSIEpvE?t=61","emojis":"🐠🛸","title":"Qigong for Vitality: Opening the Door of Life","length":"13m12s","bgc":"mediumaquamarine"},
{"url":"https://youtu.be/RoIqYtiTLFI?t=18","emojis":"🐍🍂","title":"UPDATED: Module 04 beginners Tai Chi","length":"10m38s","bgc":"lemonchiffon"},
{"url":"https://youtu.be/nmmNWj9YtAw?si=Q7Hj2zZY6bPrq2GN&t=52","emojis":"🐯🌋","title":"DAILY QIGONG ROUTINE","length":"17m8s","bgc":"mediumaquamarine"},
{"url":"https://youtu.be/62a20CiIAlY?t=44","emojis":"🐉☂️","title":"Tai Chi Five Minutes a Day Module 05","length":"7m2s","bgc":"lemonchiffon"},
{"url":"hhttps://youtu.be/EZT8RC0wRbA?si=o8q9s3p7nwUaKhQw&t=112","emojis":"🐻🔥","title":"Qigong to Circulate Your Energy","length":"15m30s","bgc":"mediumaquamarine"},
{"url":"https://youtu.be/tbwbL1pg0HY?t=30","emojis":"🐒🦜","title":"Seated Tai Chi for Home Practice","length":"18m48s","bgc":"indianred"},
{"url":"https://youtu.be/Ba0fweKUwIc?t=37","emojis":"🌬🦮","title":"Yoga to Calm Your Nerves","length":"24m36s","bgc":"cornflowerblue"},
{"url":"https://youtu.be/_V29hE0_oBE","emojis":"🦉🌜","title":"Seated Tai Chi For Seniors with David-Dorian Ross","length":"11m15s","bgc":"indianred"}
]
const extras = [
{"url":"https://youtu.be/Yzm3fA2HhkQ?t=45","emojis":"🪢🪡","title":"Yoga For Flexibility","length":"16m26s","bgc":"cornflowerblue"},
{"url":"https://www.youtube.com/watch?v=V1HbXt5ZRlg&t=39s","emojis":"🗼🪜","title":"Head Stand Yoga Pose","length":"17m59s","bgc":"cornflowerblue"},
{"url":"https://youtu.be/ED3_i_xVd_s?t=54","emojis":"🎱🌈","title":"Qigong exercises to manage Stress and Anxiety","length":"10m14s","bgc":"lemonchiffon"},
{"url":"https://youtu.be/FgfT2fOv31E?t=40","emojis":"🪗🫧","title":"Yoga For Abs","length":"8m2s","bgc":"cornflowerblue"},
{"url":"https://youtu.be/LZ2oHU-mMJI?t=443","emojis":"🕸🎡","title":"Qigong 5 Minutes a Day - Spinning the Silk Wheel","length":"12m29s","bgc":"lemonchiffon"},
{"url":"https://youtu.be/Nnd5Slo02us?t=25","emojis":"🪑🏹","title":"Yoga For Focus & Productivity","length":"9m51s","bgc":"cornflowerblue"},
{"url":"https://youtu.be/eBdfCX5XnX4","emojis":"4️⃣🦎","title":"6-Minute Yoga For Hips","length":"6m15s","bgc":"cornflowerblue"},
{"url":"https://youtu.be/8T39OBNaNzU?t=26","emojis":"✂🧱","title":"2-Minute Core Conditioning","length":"12m6s","bgc":"cornflowerblue"}
]
const howManyWarmUps = warmUps.length
const howManyExercises = exercises.length
const howManyExtras = extras.length

export default function Timecalc() {
  const choice1 = RoundedResult % howManyWarmUps
  const choice2 = RoundedResult % howManyExercises
  const choice3 = RoundedResult % howManyExtras

  const [randomNumber1, setRandomNumber1] = useState(howManyWarmUps)
  const getRandomNumber1 = () => {
    const randomNumber1 = Math.floor(Math.random() * howManyWarmUps + 1)
    setRandomNumber1(randomNumber1)
  }
  const [randomNumber2, setRandomNumber2] = useState(howManyExercises)
  const getRandomNumber2 = () => {
    const randomNumber2 = Math.floor(Math.random() * howManyExercises + 1)
    setRandomNumber2(randomNumber2)
  }
  const [randomNumber3, setRandomNumber3] = useState(howManyExtras)
  const getRandomNumber3 = () => {
    const randomNumber3 = Math.floor(Math.random() * howManyExtras + 1)
    setRandomNumber3(randomNumber3)
  }
  const listWarmUps = warmUps.map((warmUp) => 
    <a href={`${warmUp.url} table-cell`}>
      <div className={`spacing-class ${warmUp.bgc}`}><span className="responsive-text">{warmUp.title}&nbsp;</span><div>{warmUp.emojis}&nbsp;{warmUp.length}</div></div>
    </a>
  );
  const listExercises = exercises.map((exercise) => 
    <a href={`${exercise.url} table-cell`}>
      <div className={`spacing-class ${exercise.bgc}`}><span className="responsive-text">{exercise.title}&nbsp;</span><div>{exercise.emojis}&nbsp;{exercise.length}</div></div>
    </a>
  );
  const listExtras = extras.map((extra) => 
    <a href={`${extra.url} table-cell`}>
      <div className={`spacing-class ${extra.bgc}`}><span className="responsive-text">{extra.title}&nbsp;</span><div>{extra.emojis}&nbsp;{extra.length}</div></div>
    </a>
  );
  return(
    <div>
      <div>⚓️ Today is
        <span> {Today}</span>
      </div>
      <div>🤯 It's been
        <span> {RoundedResult} days since this practice began.</span>
      </div>

      <div>🥠 Today's Suggested Videos:
        <table>
          <tr className="table-row">
            <td className={warmUps[choice1].bgc}>
              <a href={warmUps[choice1].url}
              target="_blank" rel="noreferrer noopener">
                <h1>{warmUps[choice1].emojis}</h1>
                <p className="unstyled-text responsive-text">{warmUps[choice1].title}</p>
              </a>
            </td>
            <td className={exercises[choice2].bgc}>
              <a href={exercises[choice2].url}
              target="_blank" rel="noreferrer noopener">
                <h1>{exercises[choice2].emojis}</h1>
                <p className="unstyled-text responsive-text">{exercises[choice2].title}</p>
              </a>
            </td>
            <td className={extras[choice3].bgc}>
              <a href={extras[choice3].url}
              target="_blank" rel="noreferrer noopener">
                <h1>{extras[choice3].emojis}</h1>
                <p className="unstyled-text responsive-text">{extras[choice3].title}</p>
              </a>
            </td>
          </tr>
          <tr className="table-row">
            <td>
              <div className="smolTable">{listWarmUps}</div>
            </td>
            <td>
              <div className="smolTable">{listExercises}</div>
            </td>
            <td>
              <div className="smolTable">{listExtras}</div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}