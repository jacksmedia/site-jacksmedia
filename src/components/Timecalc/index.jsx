import React, {useState} from "react"

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
const Today = new Date().toLocaleDateString('en-US', options )
const dayOneDate = new Date('5/12/2021')
const nowDate = new Date(Today)
const Difference_In_Time = nowDate.getTime() - dayOneDate.getTime()
const Difference_In_Days = Difference_In_Time / (1000*60*60*24)
const RoundedResult = Math.round(Difference_In_Days)

const warmUps = [{"url":"https://www.youtube.com/watch?v=X3-gKPNyrTA?t=26","emojis":"🛣🧘"},{"url":"https://youtu.be/50txkOrJn9o?t=87","emojis":"🦩🪃"},{"url":"https://youtu.be/SedzswEwpPw?t=51","emojis":"🧣🧘"},{"url":"https://youtu.be/jOfshreyu4w","emojis":"🫂🏅"}]
const exercises = [{"url":"https://youtu.be/cEOS2zoyQw4?t=89","emojis":"🦆🌊"},{"url":"https://youtu.be/HMbT-CPVl2k","emojis":"🍵🐵"},{"url":"https://www.youtube.com/watch?v=enk0bOv-gF8?t=17","emojis":"🦇☁️"},{"url":"https://www.youtube.com/watch?v=IyINAjEoTIs?t=80","emojis":"🦅🌴"},{"url":"https://www.youtube.com/watch?v=OPcZlXYcdMA?t=31","emojis":"🐎🌕"},{"url":"https://www.youtube.com/watch?v=8wddPSIEpvE?t=54","emojis":"🐠🛸"},{"url":"https://www.youtube.com/watch?v=RoIqYtiTLFI","emojis":"🐍🍂"},{"url":"https://www.youtube.com/watch?v=nmmNWj9YtAw?t=60","emojis":"🐯🌋"},{"url":"https://www.youtube.com/watch?v=62a20CiIAlY?t=25","emojis":"🐉☂️"},{"url":"https://youtu.be/EZT8RC0wRbA?t=88","emojis":"🐻🔥"},{"url":"https://youtu.be/tbwbL1pg0HY?t=30","emojis":"🐒🦜"},{"url":"https://youtu.be/Ba0fweKUwIc?t=37","emojis":"🌬🦮"},{"url":"https://youtu.be/_V29hE0_oBE","emojis":"🦉🌜"}]
const extras = [{"url":"https://www.youtube.com/watch?v=V1HbXt5ZRlg&t=39s","emojis":"🗼🪜"},{"url":"https://youtu.be/ED3_i_xVd_s?t=54","emojis":"🎱🌈"},{"url":"https://youtu.be/FgfT2fOv31E","emojis":"🪗🫧"},{"url":"https://youtu.be/Nnd5Slo02us","emojis":"🪑🏹"},{"url":"https://youtu.be/LZ2oHU-mMJI?t=443","emojis":"🕸🎡"},{"url":"https://youtu.be/Yzm3fA2HhkQ?t=45","emojis":"🪢🪡"},{"url":"https://youtu.be/eBdfCX5XnX4","emojis":"4️⃣🦎"}]
const howManyWarmUps = warmUps.length
const howManyExercises = exercises.length
const howManyExtras = extras.length

const Timecalc = () => {
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
              <h2><a href="{warmUps[choice1].url}">{warmUps[choice1].emojis}</a></h2>
            </td>
            <td>
              <h2><a href="{exercises[choice2].url}">{exercises[choice2].emojis}</a></h2>
            </td>
            <td>
              <h2><a href="{extras[choice3].url}">{extras[choice3].emojis}</a></h2>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Timecalc