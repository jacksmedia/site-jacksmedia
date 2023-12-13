import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const Routines = [
  {
    title: 'Warm Ups',
    img: require('@site/static/img/warmups.png').default,
    videos: [
     {"https://www.youtube.com/watch?v=X3-gKPNyrTA?t=26":"🧘 Neck Hygiene"},
     {"https://www.youtube.com/watch?v=SedzswEwpPw?t=51":"🧣 Neck & Shoudler Relief"},
     {"https://www.youtube.com/watch?v=Ba0fweKUwIc":"🌬 Calm Your Nerves"},
     {"https://youtu.be/50txkOrJn9o?t=41":"🦩 Tai Chi Warm Up"},
     {"https://youtu.be/jOfshreyu4w":"🫂 Quick Stress Fix"}
    ],
  },
  {
    title: 'Main',
    img: require('@site/static/img/main.png').default,
    videos: [
      {"https://youtu.be/cEOS2zoyQw4?t=89":"🦆🌊 1️⃣ "},
      {"https://www.youtube.com/watch?v=HMbT-CPVl2k?t=33":"🐵 Mood Lifter"},
      {"https://www.youtube.com/watch?v=enk0bOv-gF8?t=17":"🦇☁️ 2️⃣ "},
      {"https://www.youtube.com/watch?v=IyINAjEoTIs?t=80":"🦅 Expanding 6D"},
      {"https://www.youtube.com/watch?v=OPcZlXYcdMA?t=31":"🐎🌕 3️⃣ "},
      {"https://www.youtube.com/watch?v=8wddPSIEpvE?t=54":"🐠 Door of Life"},
      {"https://www.youtube.com/watch?v=RoIqYtiTLFI":"🐍🍂 4️⃣ "},
      {"https://www.youtube.com/watch?v=nmmNWj9YtAw?t=60":"🐯 Zip Up"},
      {"https://www.youtube.com/watch?v=62a20CiIAlY?t=25":"🐉☂️ 5️⃣"},
      {"https://youtu.be/EZT8RC0wRbA?t=88":"🐻 Circulate Energy"}
  ],
  },
  {
    title: 'Extras',
    img: require('@site/static/img/extras.png').default,
    videos: [
      {"https://www.youtube.com/watch?v=V1HbXt5ZRlg&t=39s":"🗼 Inversion"},
      {"https://youtu.be/Nnd5Slo02us":"🔺 Focus & Productivity"},
      {"https://youtu.be/FgfT2fOv31E":"🫧 Yoga for Abs"},
      {"https://www.youtube.com/watch?v=LZ2oHU-mMJI?t=25":"🕸 Silken Wheel"},
      {"https://www.youtube.com/watch?v=Yzm3fA2HhkQ&t=3s":"🪢 Flexibility"},
      {"https://youtu.be/ED3_i_xVd_s?t=54":"🌈 8 Rainbows"},
      {"https://youtu.be/eBdfCX5XnX4":"🦎 Open Hips"},
      {"https://www.youtube.com/watch?v=8T39OBNaNzU":"✂️🧱 Abs Work"},
      {"https://youtu.be/M59aylBo3ZE?si=C-EQU2bBIMmTpfxC&t=126":"🐉🌀 Swimming Dragon"}
    ],
  },
];

function VideoList(props){
  const videos = props.videos;
  const listItems = videos.map((video) =>
    <li>{video}</li>
  );
  return (
    <ul className="row">
      {listItems}
    </ul>
  );
 }

function Category({title, img, videos}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={img} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <VideoList {...videos}/>
      </div>
    </div>
  );
}

export default function Exercises() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {Routines.map((props, idx) => (
            <Category key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
