function setup() {
  createCanvas(400, 400);
  sliderY = height - 20;
}

function draw() {
  colorChange();
  drawSlider();
  counterMonitor();
  dayChanger();
  addCounterSliderCorrelation()
  blueValue++;
  
  console.log(counter);
}