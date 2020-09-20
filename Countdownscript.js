
var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

var myfuncCT = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days + "d "
  document.getElementById("hours").innerHTML = hours + "h " 
  document.getElementById("mins").innerHTML = minutes + "m " 
  document.getElementById("secs").innerHTML = seconds + "s"

  if (timeleft < 0) {
    clearInterval(myfuncCT);
    document.getElementById("days").innerHTML = ""
    document.getElementById("hours").innerHTML = "" 
    document.getElementById("mins").innerHTML = ""
    document.getElementById("secs").innerHTML = ""
    document.getElementById("end").innerHTML = "Expired ";  
    
  }
}, 1000);
