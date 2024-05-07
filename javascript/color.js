let dayColors = {
  redValue: 25,
  greenValue: 195,
  blueValue: 250,
}

let eveningColors = {
  redValue: 100,
  greenValue: 75,
  blueValue: 150,
}

let nightColors = {
  redValue: 0,
  greenValue: 0,
  blueValue: 65,
}



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
  
  // if (dayTime) {
  //   blueValue++;
  // } else if (eveningTime) {
  //   greenValue++;
  // }
  
  if (dayTime) {
    redValue = dayColors.redValue;
    greenValue = dayColors.greenValue;
    blueValue = dayColors.blueValue;
  } else if (eveningTime) {
    redValue = eveningColors.redValue;
    greenValue = eveningColors.greenValue;
    blueValue = eveningColors.blueValue;
  } else if (nightTime) {
    redValue = nightColors.redValue;
    greenValue = nightColors.greenValue;
    blueValue = nightColors.blueValue;
  }
}
