import React, {useState, Link, PureComponent } from "react"
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
const Today = new Date().toLocaleDateString('en-US', options )
const dayOneDate = new Date('5/12/2021')
const nowDate = new Date(Today)
const Difference_In_Time = nowDate.getTime() - dayOneDate.getTime()
const Difference_In_Days = Difference_In_Time / (1000*60*60*24)
const RoundedResult = Math.round(Difference_In_Days)

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes}m ${remainingSeconds}s`;
}

const warmUps = [
  {
    "url":"https://youtu.be/X3-gKPNyrTA?si=w8DChKHffPS-O1Yv&t=24",
    "emojis":"🛣🧘‍♀️",
    "title":"Yoga For Neck, Shoulders, Upper Back",
    "length":"10m",
    "seconds":600,
    "bgc":"cornflowerblue"
  },
  {
    "url":"https://youtu.be/50txkOrJn9o?si=LWi3_8yKID6I523K&t=88",
    "emojis":"🦩🪃","title":"Tai Chi 5 Min a Day Warm Up",
    "length":"8m24s",
    "seconds":504,
    "bgc":"lemonchiffon"
    },
  {
    "url":"https://youtu.be/SedzswEwpPw?si=W12HalSuXWHUrjlE&t=52",
    "emojis":"🧣🎒","title":"Yoga for Neck & Shoulder Relief",
    "length":"16m6s",
    "seconds":966,
    "bgc":"cornflowerblue"
    },
  {
    "url":"https://youtu.be/d-PTjUgMrig?si=-0yAPMV8tY_WJqDd&t=78",
    "emojis":"☀️🌐","title":"Sun & Earth Purification Qigong",
    "length":"7m57s",
    "seconds": 477,
    "bgc":"mediumaquamarine"
    },
  {
    "url":"https://youtu.be/jOfshreyu4w?si=Aq06Cg3LYrvCDT19&t=39",
    "emojis":"🫂🏅","title":"Quick Stress Fix 5 Min Sequence",
    "length":"4m44s",
    "seconds": 284,
    "bgc":"cornflowerblue"
  },
  {
    "url":"https://youtu.be/JOilkvadChg?si=T2iQU201w7YuZDz2&t=34",
    "emojis":"🆙🕊️","title":"Yoga to get the Juices Flowing",
    "length":"7m52s",
    "seconds": 472,
    "bgc":"cornflowerblue"
  }
]
const exercises = [
  {
    "url":"https://youtu.be/3GtFp6sz5zM?si=MO5mZbvu5babuvX5&t=85",
    "emojis":"💨🍯","title":"Qigong to Purge & Tonify",
    "length":"18m37s",
    "seconds": 1117,
    "bgc":"mediumaquamarine"
  },
  {
    "url":" https://youtu.be/KQahvKSDOoY?si=1FYjLZS4Otku2Imr&t=87",
    "emojis":"👸🌏","title":"Seated Tai Chi for Back Pain",
    "length":"13m13s",
    "seconds": 813,
    "bgc":"palegreen"
  },
  {
    "url":"https://youtu.be/cEOS2zoyQw4?si=EApSfyPYr5WgxM9y&t=91",
    "emojis":"🦆🌊","title":"Tai Chi 5 Min a Day Module 01",
    "length":"4m23s",
    "seconds": 263,
    "bgc":"lemonchiffon"
    },
  {
    "url":"https://youtu.be/HMbT-CPVl2k?si=RvLYoxjStRVeaYUO&t=48",
    "emojis":"🍵🐵","title":"Mood Lifter",
    "length":"14m37s",
    "seconds": 877,
    "bgc":"mediumaquamarine"
  },
  {
    "url":"https://youtu.be/enk0bOv-gF8?si=kooRHEd1XzdpAfr_&t=18",
    "emojis":"🦇☁️","title":"Tai Chi 5 Min a Day Module 02",
    "length":"5m42s",
    "seconds": 342,
    "bgc":"lemonchiffon"
  },
  {
    "url":"https://youtu.be/8wddPSIEpvE?si=5M0u1_wcRtYs6uaV&t=77",
    "emojis":"🐠🛸","title":"Qigong: Opening the Door of Life",
    "length":"11m43s",
    "seconds": 703,
    "bgc":"mediumaquamarine"
  },
  {
    "url":"https://youtu.be/OPcZlXYcdMA?si=Q0S5rRdkRcNaLkGy&t=31",
    "emojis":"🐎🌕","title":"Tai Chi 5 Min a Day Module 03",
    "length":"5m16s",
    "seconds": 316,
    "bgc":"lemonchiffon"
  },
  {
    "url":"https://youtu.be/IyINAjEoTIs?si=nF8uPnAU6t0WVe4w&t=103",
    "emojis":"🦅🎲","title":"Qigong for Beginners",
    "length":"28m4s",
    "seconds": 1684,
    "bgc":"mediumaquamarine"
  },
  {
    "url":"https://youtu.be/RoIqYtiTLFI?si=fX__f4j_ygWQ4ByO&t=18",
    "emojis":"🐍🍂","title":"Tai Chi 5 Min a Day Module 04",
    "length":"9m39s",
    "seconds": 579,
    "bgc":"lemonchiffon"
  },
  {
    "url":"https://youtu.be/nmmNWj9YtAw?si=ZIxziO8gm3vx8ffQ&t=62",
    "emojis":"🐯🌋","title":"Daily Qiqong Routine",
    "length":"15m50s",
    "seconds": 950,
    "bgc":"mediumaquamarine"
  },
  {
    "url":"https://youtu.be/62a20CiIAlY?si=bV2k3YkLIjfHTcWe&t=45",
    "emojis":"🐉☂️","title":"Tai Chi 5 Min a Day Module 05",
    "length":"6m4s",
    "seconds": 364,
    "bgc":"lemonchiffon"
  },
  {
    "url":"https://youtu.be/EZT8RC0wRbA?si=1u4ZkyICs-RFCiAh&t=113",
    "emojis":"🐻🔥","title":"Qigong: Circulate Your Energy",
    "length":"13m24s",
    "seconds": 804,
    "bgc":"mediumaquamarine"
  },
  {
    "url":"https://youtu.be/tbwbL1pg0HY?si=7XtAtjl2eZaBEf3g&t=30",
    "emojis":"🐒🦜","title":"Seated Tai Chi for Home Practice",
    "length":"18m",
    "seconds": 1080,
    "bgc":"palegreen"
  },
  {
    "url":"https://youtu.be/Ba0fweKUwIc?si=sLZpA36tY4HvTrju&t=809",
    "emojis":"🏔️🌁","title":"Full Body Stretch",
    "length":"10m6s",
    "seconds": 606,
    "bgc":"cornflowerblue"
  },
  {
    "url":"https://youtu.be/_V29hE0_oBE?si=GiDMPoCu9RynHwNj&t=47",
    "emojis":"🦉🌜","title":"Seated Tai Chi",
    "length":"10m6s",
    "seconds": 606,
    "bgc":"palegreen"
  }
]
const extras = [
  {
    "url":"https://youtu.be/M59aylBo3ZE?si=1cAwU0MRX8nhWUTz&t=127",
    "emojis":"🐉🌀","title":"Swimming Dragon",
    "length":"8m28s",
    "seconds": 508,
    "bgc":"mediumaquamarine"
    },
  {
    "url":"https://youtu.be/Yzm3fA2HhkQ?si=9U-udKw3-FJ9eVZ7&t=50",
    "emojis":"🪢🪡","title":"Yoga For Flexibility",
    "length":"15m4s",
    "seconds": 904,
    "bgc":"cornflowerblue"
    },
  {
    "url":"https://www.youtube.com/watch?v=V1HbXt5ZRlg&t=39s",
    "emojis":"🗼🪜","title":"Head Stand Yoga Pose",
    "length":"17m59s",
    "seconds": 1079,
    "bgc":"cornflowerblue"
    },
  {
    "url":"https://youtu.be/ED3_i_xVd_s?si=PEn7R0kCBX905vKR&t=56",
    "emojis":"🎱🌈","title":"Qigong to Manage Stress & Anxiety",
    "length":"9m2s",
    "seconds": 542,
    "bgc":"lemonchiffon"
    },
  {
    "url":"https://youtu.be/FgfT2fOv31E?si=WO9tE46rSLPDiuQr&t=40",
    "emojis":"🪗🫧","title":"Yoga For Abs",
    "length":"6m21s",
    "seconds": 381,
    "bgc":"cornflowerblue"
    },
  {
    "url":"https://youtu.be/LZ2oHU-mMJI?si=atFLf7MT6ksObXlV&t=443",
    "emojis":"🕸🎡","title":"Spinning the Silk Wheel",
    "length":"4m58s",
    "seconds": 298,
    "bgc":"lemonchiffon"
    },
  {
    "url":"https://youtu.be/Nnd5Slo02us?si=9gwhxzB009KkaALo&t=26",
    "emojis":"🪑🏹","title":"Yoga For Focus & Productivity",
    "length":"9m10s",
    "seconds": 550,
    "bgc":"cornflowerblue"
    },
  {
    "url":"https://youtu.be/eBdfCX5XnX4?si=-0EK8KmKW8tXCkul&t=5",
    "emojis":"4️⃣🦎","title":"Yoga For Hips",
    "length":"5m57s",
    "seconds": 357,
    "bgc":"cornflowerblue"
    },
  {
    "url":"https://youtu.be/8T39OBNaNzU?si=tks83fkkQcGWN02p&t=27",
    "emojis":"✂🧱","title":"Core Conditioning",
    "length":"11m11s",
    "seconds": 671,
    "bgc":"cornflowerblue"
  }
]
const howManyWarmUps = warmUps.length
const howManyExercises = exercises.length
const howManyExtras = extras.length

const choice1 = RoundedResult % howManyWarmUps
const choice2 = RoundedResult % howManyExercises
const choice3 = RoundedResult % howManyExtras

const RandomizerButton = ({ warmUps, exercises, extras }) => {
const [randomChoice1, setRandomChoice1] = useState(null);
const [randomChoice2, setRandomChoice2] = useState(null);
const [randomChoice3, setRandomChoice3] = useState(null);

// Function to get a random choice from a list
const getRandomChoice = (list) => {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
};

// Function to handle button click and set random choices
const handleRandomize = () => {
  setRandomChoice1(getRandomChoice(warmUps));
  setRandomChoice2(getRandomChoice(exercises));
  setRandomChoice3(getRandomChoice(extras));
};

  return (
    <div>
      <div>
        <p>Warm Up: {randomChoice1 ? randomChoice1.title : 'Select a random choice'}</p>
        <p>Exercise: {randomChoice2 ? randomChoice2.title : 'Select a random choice'}</p>
        <p>Extra: {randomChoice3 ? randomChoice3.title : 'Select a random choice'}</p>
      </div>
      <button onClick={handleRandomize}>Randomize Choices</button>
    </div>
  );
};


export default function Timecalc() {
  const [choice1, setChoice1] = useState(warmUps[0]);
  const [choice2, setChoice2] = useState(exercises[0]);
  const [choice3, setChoice3] = useState(extras[0]);

  const summedLengthValues = choice1.seconds + choice2.seconds + choice3.seconds;
  const practiceLength = formatTime(summedLengthValues);

  const COLORS = [choice1.bgc, choice2.bgc, choice3.bgc];

  // Button to  randomize 3 lists' choices
  const handleRandomize = () => {
    const randomWarmUp = getRandomChoice(warmUps);
    const randomExercise = getRandomChoice(exercises);
    const randomExtra = getRandomChoice(extras);
    setChoice1(randomWarmUp);
    setChoice2(randomExercise);
    setChoice3(randomExtra);
  };

  // Regenerate the lists after randomizing choices
  const listWarmUps = warmUps.map((warmUp) => (
    <a href={warmUp.url} className="table-cell">
      <div className={`spacing-class ${warmUp.bgc}`}>
        <div className="responsive-text">{warmUp.emojis}&nbsp;</div>
        <p className="unstyled-text responsive-text">{warmUp.title}</p>
        <p className="unstyled-text responsive-text">[{warmUp.length}]</p>
      </div>
    </a>
  ));

  const listExercises = exercises.map((exercise) => (
    <a href={exercise.url} className="table-cell">
      <div className={`spacing-class ${exercise.bgc}`}>
        <div className="responsive-text">{exercise.emojis}&nbsp;</div>
        <p className="unstyled-text responsive-text">{exercise.title}</p>
        <p className="unstyled-text responsive-text">[{exercise.length}]</p>
      </div>
    </a>
  ));

  const listExtras = extras.map((extra) => (
    <a href={extra.url} className="table-cell">
      <div className={`spacing-class ${extra.bgc}`}>
        <div className="responsive-text">{extra.emojis}&nbsp;</div>
        <p className="unstyled-text responsive-text">{extra.title}</p>
        <p className="unstyled-text responsive-text">[{extra.length}]</p>
      </div>
    </a>
  ));

  // Pie chart data updated with the randomized choices
  const data = [
    { title: choice1.emojis, value: choice1.seconds, color: choice1.bgc },
    { title: choice2.emojis, value: choice2.seconds, color: choice2.bgc },
    { title: choice3.emojis, value: choice3.seconds, color: choice3.bgc }
  ];

  return (
    <div className="app-layout">
      <h3>⚓️ Today is
        <span> {Today}</span>
      </h3>
      <h3>🤯 It's been
        <span> {RoundedResult} days since this practice began.</span>
      </h3>
      <h3>🥠 Today's Suggested Videos:</h3>

      {/* Rendering the chosen values */}
      <div className="table-row space-around">
        <p>Warm Up</p>
        <p>Exercise</p>
        <p>Extra</p>
      </div>
      <div className="table-row space-around">
        <a href={choice1.url} target="_blank" rel="noreferrer noopener" className={`table-cell special-cell spacing-class ${choice1.bgc}`}>
          <div className="bigger-font">{choice1.emojis}</div>
          <p className="unstyled-text responsive-text">{choice1.title}</p>
          <p className="unstyled-text responsive-text">[{choice1.length}]</p>
        </a>

        <a href={choice2.url} target="_blank" rel="noreferrer noopener" className={`table-cell special-cell spacing-class ${choice2.bgc}`}>
          <div className="bigger-font">{choice2.emojis}</div>
          <p className="unstyled-text responsive-text">{choice2.title}</p>
          <p className="unstyled-text responsive-text">[{choice2.length}]</p>
        </a>

        <a href={choice3.url} target="_blank" rel="noreferrer noopener" className={`table-cell special-cell spacing-class ${choice3.bgc}`}>
          <div className="bigger-font">{choice3.emojis}</div>
          <p className="unstyled-text responsive-text">{choice3.title}</p>
          <p className="unstyled-text responsive-text">[{choice3.length}]</p>
        </a>
      </div>

      <div className="table-row">
        <div>
          <h3>
            Today's practice is {practiceLength} seconds long.
          </h3>
            <RandomizerButton warmUps={warmUps} exercises={exercises} extras={extras} />
        </div>
        <PieChart width={300} height={200}>
          <Pie
            data={data}
            cx={140}
            cy={80}
            startAngle={360}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            labelLine={false}
            label={data.title}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </div>

      <div className="table-row space-around">
        <p>Warm Ups</p>
        <p>Exercises</p>
        <p>Extras</p>
      </div>
      <div className="table-row">
        <div className="smolTable">{listWarmUps}</div>
        <div className="smolTable">{listExercises}</div>
        <div className="smolTable">{listExtras}</div>
      </div>
    </div>
  );
}
