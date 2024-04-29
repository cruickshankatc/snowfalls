function setup() {
  createCanvas(400, 400);
  sliderY = height - 20;
}
let blueValue = 0;
let greenValue = 100;
let color = "rgb(50, 50, " + blueValue + ")";




function draw() {
  color = `rgb(0, ${greenValue}, ${blueValue})`;
  background(color);
  
  
   addCounter = 1 / sliderValue;
   addCounter = parseFloat(addCounter.toFixed(2));
  
  
  
  
  //blueValue = round(sliderValue * 20);
  //greenValue = round(sliderValue * 20);

  
  
  
  
  
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
  
  
  
  counterMonitor();
  dayChanger();
  blueValue++;
  
  console.log(counter);
}
