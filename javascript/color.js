//Contain the rgb values that will be used within
//the variable "color" to change the color of the
//sky
let redValue = 0;
let greenValue = 100;
let blueValue = 0;
let color;

//Alters the rgb values (and by extension the 
//"color" variable) when the time of day changes.
//Determined by the Boolean values for the times 
//of day.
function colorChange() {
  color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  background(color);
  
  if (timeDay) {
    blueValue++;
  } else if (timeEvening) {
    greenValue++;
  }
}