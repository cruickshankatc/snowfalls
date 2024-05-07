let timePassageInterval = 200;
let timeKeyPoints = [];

let dayLimit;
let eveningLimit;
let nightLimit;

let dayPeak;
let eveningPeak;
let nightPeak;

function fillTimeKeyPoints () {
  let y = timePassageInterval;
  for (x = 0; x < 3; x++) {
    timeKeyPoints.push(y);
    y = y + timePassageInterval;
  }
  
  dayLimit = timeKeyPoints[0];
  eveningLimit = timeKeyPoints[1];
  nightLimit = timeKeyPoints[2];
  
  dayPeak = dayLimit - (timePassageInterval/2);
  eveningPeak = eveningLimit - (timePassageInterval/2);
  nightPeak = nightLimit - (timePassageInterval/2);
}

fillTimeKeyPoints();






//Day Variables
let dayTime;
let eveningTime;
let nightTime;

//Time of day changes are made when counter reaches
//certain number thresholds
function dayChanger() {
  if (counter < 200) {
    dayTime = true;
    nightTime = false;
    //skyBlue++;
  } else if (counter > 200 && counter < 400) {
    dayTime = false;
    eveningTime = true;
  } else if (counter > 400 && counter < 600) {
    eveningTime = false;
    nightTime = true;
  } else if (counter > 600) {
    counter = 0;
  }
}