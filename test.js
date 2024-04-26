let testTime = 5000;

setInterval(logMessage, testTime);

function logMessage() {
  console.log("the sky is blue");
  testTime = 1000;
}