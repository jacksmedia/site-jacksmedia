export default function timeFormat(timeString) {
  const [minutesStr, secondsStr] = timeString.split('h'); // Split time string into minutes & seconds using 'h' as a separator
  secondsString = secondsStr.split('s'); // same tech to rm the 's'
  secondsStr = secondsString[0]; // just the seconds value stored

  // Convert the strings to numbers
  const minutes = parseInt(minutesStr, 10);
  const seconds = parseInt(secondsStr, 10);

  // Check if the conversion is successful
  if (!isNaN(minutes) && !isNaN(seconds)) {
    // Calculate the total seconds
    return(<span>{minutes * 60 + seconds}</span>);
  } else {
    // Handle invalid input
    console.error('Invalid time format');
    return null;
  }
}

// Example usage:
// const timeString = '3:45'; // Change this to your input string
// const totalSeconds = timeFormat(timeString);
// if (totalSeconds !== null) {
//  console.log(`Total seconds: ${totalSeconds}`);
// }