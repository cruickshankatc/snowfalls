let sliderX = 10; // X position of the slider
let sliderY;      // Y position of the slider
let sliderWidth = 100;
let sliderHeight = 10;
let sliderValue = 1; // Default value of the slider
let dragging = false;





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