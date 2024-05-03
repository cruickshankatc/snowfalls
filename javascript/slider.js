/*This file contains most things related to the slider such as the initial variables, the functions related to the slider and drawing the slider. The function which deals with the correlation between the slider and the counter is in counter.js*/

//Initial variables
let sliderX = 10; // X position of the slider
let sliderY;      // Y position of the slider
let sliderWidth = 100;
let sliderHeight = 10;
let sliderValue = 1; // Default value of the slider
let dragging = false;

//Functions that allow user interaction with the slider
function mousePressed() {
  // Check if the mouse is over the slider handle
  if (mouseX > sliderX && mouseX < sliderX + sliderWidth && mouseY > sliderY && mouseY < sliderY + sliderHeight) {
    dragging = true;
  }
}

function mouseReleased() {
  dragging = false;
}

function mouseDragged() {
  if (dragging) {
    // Update the slider value based on mouse position
    sliderValue = constrain(map(mouseX, sliderX, sliderX + sliderWidth, 1, 10), 1, 10);
  }
}

//Puts all the pieces of the slider together for the
//drawing which will be activated in draw.js
function drawSlider() {
  //Draw the slider
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
}