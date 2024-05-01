//counter is timeChange
let counter = 1;

//addCounter is rate of change
let addCounter = 1;

function counterMonitor() {
  counter += addCounter;
  counter = parseFloat(counter.toFixed(2));
}

function addCounterSliderCorrelation() {
  addCounter = 1 / sliderValue;
  addCounter = parseFloat(addCounter.toFixed(2));
}