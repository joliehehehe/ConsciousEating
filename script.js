// Countdown page
var countDownDate = new Date("Mar 24, 2021 16:16:16").getTime();

// To update countdown every 1 second
var countdownfunction = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Get difference between now and dedicated date an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("count-down").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // For when countdown timer is over
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("count-down").innerHTML = "Lottery Expired";
  }
}, 1000);

