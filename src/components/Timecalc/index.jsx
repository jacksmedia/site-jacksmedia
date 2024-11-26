import React, { useState, useEffect } from 'react';
import VideoCard from './VideoCard';
import PieChartComponent from './PieChartComponent';
import RandomizerButton from './RandomizerButton';
import data from '/data.json';

// Format time function
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}m ${remainingSeconds}s`;
}

const Timecalc = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  // Fetch data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        const result = await response.json();
        console.log('Fetched data:', result);  // Log to check if the data is actually fetched
        setData(result); // Store the fetched data
        setIsLoading(false); // Set loading to false once data is ready
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Stop loading even if there's an error
      }
    };

    fetchData();
  }, []); // Empty array means this effect runs only once when the component mounts

  // Show loading screen while data is being fetched
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Safely access the data properties with optional chaining
  const warmUps = data?.warmUps || [];
  const exercises = data?.exercises || [];
  const extras = data?.extras || [];

  // Ensure we have valid data to proceed
  if (!warmUps.length || !exercises.length || !extras.length) {
    return <div>Error: Data is missing some essential values.</div>;
  }

  const todays1 = Math.floor(Math.random() * warmUps.length);
  const todays2 = Math.floor(Math.random() * exercises.length);
  const todays3 = Math.floor(Math.random() * extras.length);

  const choice1 = warmUps[todays1];
  const choice2 = exercises[todays2];
  const choice3 = extras[todays3];

  const Today = new Date().toLocaleDateString('en-US');
  const dayOneDate = new Date('5/12/2021');
  const nowDate = new Date(Today);
  const Difference_In_Time = nowDate.getTime() - dayOneDate.getTime();
  const Difference_In_Days = Difference_In_Time / (1000 * 60 * 60 * 24);
  const RoundedResult = Math.round(Difference_In_Days);

  const summedLengthValues = (choice1?.seconds || 0) + (choice2?.seconds || 0) + (choice3?.seconds || 0);
  const practiceLength = formatTime(summedLengthValues);

  const handleRandomize = () => {
    const randomWarmUp = warmUps[Math.floor(Math.random() * warmUps.length)];
    const randomExercise = exercises[Math.floor(Math.random() * exercises.length)];
    const randomExtra = extras[Math.floor(Math.random() * extras.length)];
    setChoice1(randomWarmUp);
    setChoice2(randomExercise);
    setChoice3(randomExtra);
  };

  const dataForPieChart = [
    { title: choice1?.emojis || '😊', value: choice1?.seconds || 0, color: choice1?.bgc || 'gray' },
    { title: choice2?.emojis || '💪', value: choice2?.seconds || 0, color: choice2?.bgc || 'gray' },
    { title: choice3?.emojis || '✨', value: choice3?.seconds || 0, color: choice3?.bgc || 'gray' }
  ];

  return (
    <div className="app-layout">
      <h3>⚓️ Today is <span>{new Date().toLocaleDateString()}</span></h3>
      <h3>🤯 It's been <span>{RoundedResult}</span> days since this practice began.</h3>

      <div className="row">
        <p>Warm Up</p>
        <p>Exercises</p>
        <p>Extras</p>
      </div>
      <div className="row">
        <div className='column p-3'>
          <VideoCard video={choice1} />
        </div>
        <div className='column'>
          <VideoCard video={choice2} />
        </div>
        <div className='column'>
          <VideoCard video={choice3} />
        </div>
      </div>

      <div className="row">
        <div className='col-4 p-3'>
          <h3>Today's practice is {practiceLength} long.</h3>
          <RandomizerButton handleRandomize={handleRandomize} />
        </div>
        <div className='col-8'>
          <PieChartComponent data={dataForPieChart} />
        </div>
      </div>
      <h2>All Videos</h2>
      <div className="row">
        <p>Warm Up</p>
        <p>Exercises</p>
        <p>Extras</p>
      </div>
      <div className="row">
        <div className="column">
          <div className="video-card-wrapper">
            {warmUps.map((item, index) => (
              <VideoCard 
                video={item} 
                key={index} 
                url={item?.url || ''} // Fallback if URL is missing
                emojis={item?.emojis || '😀'} // Fallback if emojis is missing
              />
            ))}
          </div>
        </div>
        <div className="column">
          <div className="video-card-wrapper">
            {exercises.map((item, index) => (
              <VideoCard 
                video={item} 
                key={index} 
                url={item?.url || ''} 
                emojis={item?.emojis || '💪'}
              />
            ))}
          </div>
        </div>
        <div className="column">
          <div className="video-card-wrapper">
            {extras.map((item, index) => (
              <VideoCard 
                video={item} 
                key={index} 
                url={item?.url || ''} 
                emojis={item?.emojis || '✨'}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timecalc;
