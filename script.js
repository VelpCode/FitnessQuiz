function displayTime() {
    // get the current time
    var currentTime = new Date();
  
    // extract the hours, minutes, and seconds from the current time
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
  
    // add a leading zero to the minutes and seconds if they are less than 10
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
  
    // update the clock display
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = ":" + minutes;
    document.getElementById("seconds").innerHTML = ":" + seconds;
  }
  
  // call the displayTime function every 1000 milliseconds (1 second)
  setInterval(displayTime, 1000);