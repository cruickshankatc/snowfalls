//Number which the time changes depend upon
let counter = 1;

//Number which affects the rate of change
let addCounter = 1;

//Updates the counter so the day progresses
function counterMonitor() {
  counter += addCounter;
  
  //Makes sure counter is set to a rounded number
  counter = parseFloat(counter.toFixed(2));
}

//Allows for moving of the slider to change 
//addCounter (i.e. the rate of change)
function addCounterSliderCorrelation() {
  addCounter = 1 / sliderValue;
  addCounter = parseFloat(addCounter.toFixed(2));
}