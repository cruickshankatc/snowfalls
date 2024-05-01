let redValue = 0;
let greenValue = 100;
let blueValue = 0;
let color;

function colorChange() {
  color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  background(color);
  
  if (timeDay) {
    blueValue++;
  } else if (timeEvening) {
    greenValue++;
  }
}