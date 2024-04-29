//Day Variables
let timeDay;
let timeEvening;
let timeNight;

//counter is timeChange
let counter = 1;

//addCounter is rate of change
let addCounter = 1;

function counterMonitor() {
  counter += addCounter;
  counter = parseFloat(counter.toFixed(2));
}

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

function colorChange() {
  if (timeDay) {
    blueValue++;
  } else if (timeEvening) {
    greenValue++;
    
  }
}