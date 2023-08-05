import React, {Link, useState} from "react"

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
const Today = new Date().toLocaleDateString('en-US', options )
const dayOneDate = new Date('5/12/2021')
const nowDate = new Date(Today)
const Difference_In_Time = nowDate.getTime() - dayOneDate.getTime()
const Difference_In_Days = Difference_In_Time / (1000*60*60*24)
const RoundedResult = Math.round(Difference_In_Days)

const warmUps = [
{"url":"https://www.youtube.com/watch?v=X3-gKPNyrTA?t=26","emojis":"🛣🧘"},
{"url":"https://youtu.be/50txkOrJn9o?t=87","emojis":"🦩🪃"},
{"url":"https://youtu.be/SedzswEwpPw?t=51","emojis":"🧣🧘"},
{"url":"https://youtu.be/jOfshreyu4w?t=41","emojis":"🫂🏅"}
]
const exercises = [
{"url":"https://youtu.be/3GtFp6sz5zM?t=68","emojis":"💨🍯"},
{"url":"https://youtu.be/cEOS2zoyQw4?t=89","emojis":"🦆🌊"},
{"url":"https://youtu.be/HMbT-CPVl2k?t=49","emojis":"🍵🐵"},
{"url":"https://youtu.be/enk0bOv-gF8?t=16","emojis":"🦇☁️"},
{"url":"https://youtu.be/IyINAjEoTIs?t=85","emojis":"🚪🦅"},
{"url":"https://www.youtube.com/watch?v=OPcZlXYcdMA?t=31","emojis":"🐎🌕"},
{"url":"https://youtu.be/8wddPSIEpvE?t=61","emojis":"🐠🛸"},
{"url":"https://youtu.be/RoIqYtiTLFI?t=18","emojis":"🐍🍂"},
{"url":"https://www.youtube.com/watch?v=nmmNWj9YtAw?t=60","emojis":"🐯🌋"},
{"url":"https://youtu.be/62a20CiIAlY?t=44","emojis":"🐉☂️"},
{"url":"https://youtu.be/EZT8RC0wRbA?t=88","emojis":"🐻🔥"},
{"url":"https://youtu.be/tbwbL1pg0HY?t=30","emojis":"🐒🦜"},
{"url":"https://youtu.be/Ba0fweKUwIc?t=37","emojis":"🌬🦮"},
{"url":"https://youtu.be/_V29hE0_oBE","emojis":"🦉🌜"}
]
const extras = [
{"url":"https://youtu.be/Yzm3fA2HhkQ?t=45","emojis":"🪢🪡"},
{"url":"https://www.youtube.com/watch?v=V1HbXt5ZRlg&t=39s","emojis":"🗼🪜"},
{"url":"https://youtu.be/ED3_i_xVd_s?t=54","emojis":"🎱🌈"},
{"url":"https://youtu.be/FgfT2fOv31E?t=40","emojis":"🪗🫧"},
{"url":"https://youtu.be/LZ2oHU-mMJI?t=443","emojis":"🕸🎡"},
{"url":"https://youtu.be/Nnd5Slo02us?t=25","emojis":"🪑🏹"},
{"url":"https://youtu.be/eBdfCX5XnX4","emojis":"4️⃣🦎"},
{"url":"https://youtu.be/8T39OBNaNzU?t=26","emojis":"✂🧱"}
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
    <a href="{warmUps.emojis}"><li>{warmUp.emojis}</li></a>
  );
  const listExercises = exercises.map((exercise) => 
    <a href="{exercises.emojis}"><li>{exercise.emojis}</li></a>
  );
  const listExtras = extras.map((extra) => 
    <a href="{extras.emojis}"><li>{extra.emojis}</li></a>
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
          <tr>
            <td>
              {/* map statement here, not an array pointer */}
              <h2>{warmUps[choice1].emojis}</h2>
            </td>
            <td>
              {/* map statement here, not an array pointer */}
              <h2>{exercises[choice2].emojis}</h2>
            </td>
            <td>
              {/* map statement here, not an array pointer */}
              <h2>{extras[choice3].emojis}</h2>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}