let testTime = 5000;

function startTimer() {
  setTimeout(function() {
    logMessage();
    testTime -= 1000; // Decrease the time interval by 1 second
    if (testTime > 0) {
      startTimer(); // Call startTimer recursively
    }
  }, testTime);
}

function logMessage() {
  console.log("the sky is blue");
}

//startTimer(); // Start the timer