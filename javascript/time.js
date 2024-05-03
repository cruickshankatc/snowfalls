//Day Variables
let timeDay;
let timeEvening;
let timeNight;

//Time of day changes are made when counter reaches
//certain number thresholds
function dayChanger() {
  if (counter < 200) {
    timeDay = true;
    timeNight = false;
    //skyBlue++;
  } else if (counter > 200 && counter < 400) {
    timeDay = false;
    timeEvening = true;
  } else if (counter > 400 && counter < 600) {
    timeEvening = false;
    timeNight = true;
  } else if (counter > 600) {
    counter = 0;
  }
}