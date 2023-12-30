import React, {Link, useState} from "react"

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
const Today = new Date().toLocaleDateString('en-US', options )
const dayOneDate = new Date('5/12/2021')
const nowDate = new Date(Today)
const Difference_In_Time = nowDate.getTime() - dayOneDate.getTime()
const Difference_In_Days = Difference_In_Time / (1000*60*60*24)
const RoundedResult = Math.round(Difference_In_Days)

const warmUps = [
  {
    "url":"https://youtu.be/X3-gKPNyrTA?si=w8DChKHffPS-O1Yv&t=24",
"emojis":"🛣🎒",
"title":"Yoga For Neck, Shoulders, Upper Back",
"length":"10m",
"bgc":"cornflowerblue"},
  { "url":"https://youtu.be/50txkOrJn9o?si=LWi3_8yKID6I523K&t=88","emojis":"🦩🪃","title":"Tai Chi 5 Min a Day Warm Up","length":"8m24s","bgc":"lemonchiffon"},
  { "url":"https://youtu.be/SedzswEwpPw?si=W12HalSuXWHUrjlE&t=52","emojis":"🧣🎒","title":"Yoga for Neck & Shoulder Relief","length":"16m6s","bgc":"cornflowerblue"},
  { "url":"https://youtu.be/d-PTjUgMrig?si=-0yAPMV8tY_WJqDd&t=78","emojis":"☀️🌐","title":"Sun & Earth Purification Qigong","length":"7m57s","bgc":"mediumaquamarine"},
  { "url":"https://youtu.be/jOfshreyu4w?si=Aq06Cg3LYrvCDT19&t=39","emojis":"🫂🏅","title":"Quick Stress Fix 5 Min Sequence","length":"4m44s","bgc":"cornflowerblue"}
]
const exercises = [
  { "url":"https://youtu.be/3GtFp6sz5zM?si=MO5mZbvu5babuvX5&t=85","emojis":"💨🍯","title":"Qigong to Purge & Tonify","length":"18m37s","bgc":"mediumaquamarine"},
  { "url":"https://youtu.be/cEOS2zoyQw4?si=EApSfyPYr5WgxM9y&t=91","emojis":"🦆🌊","title":"Tai Chi 5 Min a Day Module 01","length":"4m23s","bgc":"lemonchiffon"},
  { "url":"https://youtu.be/HMbT-CPVl2k?si=RvLYoxjStRVeaYUO&t=48","emojis":"🍵🐵","title":"Mood Lifter","length":"14m37s","bgc":"mediumaquamarine"},
  { "url":"https://youtu.be/enk0bOv-gF8?si=kooRHEd1XzdpAfr_&t=18","emojis":"🦇☁️","title":"Tai Chi 5 Min a Day Module 02","length":"5m42s","bgc":"lemonchiffon"},
  { "url":"https://youtu.be/8wddPSIEpvE?si=5M0u1_wcRtYs6uaV&t=77","emojis":"🐠🛸","title":"Qigong: Opening the Door of Life","length":"11m43s","bgc":"mediumaquamarine"},
  { "url":"https://youtu.be/OPcZlXYcdMA?si=Q0S5rRdkRcNaLkGy&t=31","emojis":"🐎🌕","title":"Tai Chi 5 Min a Day Module 03","length":"5m16s","bgc":"lemonchiffon"},
  { "url":"https://youtu.be/IyINAjEoTIs?si=nF8uPnAU6t0WVe4w&t=103","emojis":"🚪🦅","title":"Qigong for Beginners","length":"28m4s","bgc":"mediumaquamarine"},
  { "url":"https://youtu.be/RoIqYtiTLFI?si=fX__f4j_ygWQ4ByO&t=18","emojis":"🐍🍂","title":"Tai Chi 5 Min a Day Module 04","length":"9m39s","bgc":"lemonchiffon"},
  { "url":"https://youtu.be/nmmNWj9YtAw?si=ZIxziO8gm3vx8ffQ&t=62","emojis":"🐯🌋","title":"Daily Qiqong Routine","length":"15m50s","bgc":"mediumaquamarine"},
  { "url":"https://youtu.be/62a20CiIAlY?si=bV2k3YkLIjfHTcWe&t=45","emojis":"🐉☂️","title":"Tai Chi 5 Min a Day Module 05","length":"6m4s","bgc":"lemonchiffon"},
  { "url":"https://youtu.be/EZT8RC0wRbA?si=1u4ZkyICs-RFCiAh&t=113","emojis":"🐻🔥","title":"Qigong: Circulate Your Energy","length":"13m24s","bgc":"mediumaquamarine"},
  { "url":"https://youtu.be/tbwbL1pg0HY?si=7XtAtjl2eZaBEf3g&t=30","emojis":"🐒🦜","title":"Seated Tai Chi for Home Practice","length":"18m","bgc":"indianred"},
  { "url":"https://youtu.be/Ba0fweKUwIc?si=LljtiMSWdmXoi54_&t=37","emojis":"🌬🦮","title":"Yoga to Calm Your Nerves","length":"23m35s","bgc":"cornflowerblue"},
  { "url":"https://youtu.be/_V29hE0_oBE?si=GiDMPoCu9RynHwNj&t=47","emojis":"🦉🌜","title":"Seated Tai Chi","length":"10m6s","bgc":"indianred"}
]
const extras = [
  { "url":"https://youtu.be/M59aylBo3ZE?si=1cAwU0MRX8nhWUTz&t=127","emojis":"🐉🌀","title":"Swimming Dragon","length":"8m28","bgc":"mediumaquamarine"},
  { "url":"https://youtu.be/Yzm3fA2HhkQ?si=9U-udKw3-FJ9eVZ7&t=50","emojis":"🪢🪡","title":"Yoga For Flexibility","length":"15m4s","bgc":"cornflowerblue"},
  { "url":"https://www.youtube.com/watch?v=V1HbXt5ZRlg&t=39s","emojis":"🗼🪜","title":"Head Stand Yoga Pose","length":"17m59s","bgc":"cornflowerblue"},
  { "url":"https://youtu.be/ED3_i_xVd_s?si=PEn7R0kCBX905vKR&t=56","emojis":"🎱🌈","title":"Qigong to Manage Stress & Anxiety","length":"9m2s","bgc":"lemonchiffon"},
  { "url":"https://youtu.be/FgfT2fOv31E?si=WO9tE46rSLPDiuQr&t=40","emojis":"🪗🫧","title":"Yoga For Abs","length":"6m21s","bgc":"cornflowerblue"},
  { "url":"https://youtu.be/LZ2oHU-mMJI?si=atFLf7MT6ksObXlV&t=443","emojis":"🕸🎡","title":"Spinning the Silk Wheel","length":"4m58s","bgc":"lemonchiffon"},
  { "url":"https://youtu.be/Nnd5Slo02us?si=9gwhxzB009KkaALo&t=26","emojis":"🪑🏹","title":"Yoga For Focus & Productivity","length":"9m10s","bgc":"cornflowerblue"},
  { "url":"https://youtu.be/eBdfCX5XnX4?si=-0EK8KmKW8tXCkul&t=5","emojis":"4️⃣🦎","title":"Yoga For Hips","length":"5m57s","bgc":"cornflowerblue"},
  { "url":"https://youtu.be/8T39OBNaNzU?si=tks83fkkQcGWN02p&t=27","emojis":"✂🧱","title":"Core Conditioning","length":"11m11s","bgc":"cornflowerblue"}
]
const howManyWarmUps = warmUps.length
const howManyExercises = exercises.length
const howManyExtras = extras.length

export default function Timecalc() {
  const choice1 = RoundedResult % howManyWarmUps
  const choice2 = RoundedResult % howManyExercises
  const choice3 = RoundedResult % howManyExtras

  const listWarmUps = warmUps.map((warmUp) => 
    <a href={`${warmUp.url} table-cell`}>
      <div className={`spacing-class ${warmUp.bgc}`}>
        <div className="responsive-text">{warmUp.emojis}&nbsp;</div>
        <div>{warmUp.title}&nbsp;[{warmUp.length}]</div>
      </div>
    </a>
  );
  const listExercises = exercises.map((exercise) => 
    <a href={`${exercise.url} table-cell`}>
      <div className={`spacing-class ${exercise.bgc}`}>
        <div className="responsive-text">{exercise.emojis}&nbsp;</div>
        <div>{exercise.title}&nbsp;[{exercise.length}]</div>
      </div>
    </a>
  );
  const listExtras = extras.map((extra) => 
    <a href={`${extra.url} table-cell`}>
      <div className={`spacing-class ${extra.bgc}`}>
        <div className="responsive-text">{extra.emojis}&nbsp;</div>
        <div>{extra.title}&nbsp;[{extra.length}]</div>
      </div>
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
                <p className="unstyled-text responsive-text">[{warmUps[choice1].length}]</p>
              </a>
            </td>
            <td className={exercises[choice2].bgc}>
              <a href={exercises[choice2].url}
              target="_blank" rel="noreferrer noopener">
                <h1>{exercises[choice2].emojis}</h1>
                <p className="unstyled-text responsive-text">{exercises[choice2].title}</p>
                <p className="unstyled-text responsive-text">[{exercises[choice2].length}]</p>
              </a>
            </td>
            <td className={extras[choice3].bgc}>
              <a href={extras[choice3].url}
              target="_blank" rel="noreferrer noopener">
                <h1>{extras[choice3].emojis}</h1>
                <p className="unstyled-text responsive-text">{extras[choice3].title}</p>
                <p className="unstyled-text responsive-text">[{extras[choice3].length}]</p>
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