function setup() {
  createCanvas(400, 400);
  sliderY = height - 20;
}
let blueValue = 200;
let greenValue = 100;
let color = "rgb(50, 50, " + blueValue + ")";

if (testTime <= 2000) {
  color = '#0000FF';
} else if (testTime <= 3000) {
  color = '#FF00';
}

function draw() {
  background(color);
  
  
  
  
  blueValue = round(sliderValue * 20);
  greenValue = round(sliderValue * 20);
  color = `rgb(0, ${greenValue}, ${blueValue})`;
  
  
  
  
  
   fill(200);
  rect(sliderX, sliderY, sliderWidth, sliderHeight);
  
  // Draw the slider handle
  fill(150);
  if (dragging) {
    fill(100);
  }
  rect(sliderX + map(sliderValue, 1, 10, 0, sliderWidth), sliderY, 10, sliderHeight);
  
  // Display the value of the slider
  fill(0);
  textSize(16);
  text("Speed Multiplier: " + sliderValue, sliderX, sliderY - 10);
  
  
  
  
  
  
  
  if (testTime <= 2000) {
  color = 'rgb(0,8,41)';
} else if (testTime <= 3000) {
  color = '#FF0000';
}
}
