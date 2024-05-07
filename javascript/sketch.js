function setup() {
  createCanvas(400, 400);
  sliderY = height - 20;
}

function draw() {
  colorChange();
  drawSlider();
  counterMonitor();
  dayChanger();
  addCounterSliderCorrelation();
  
  //console.log(counter);
}