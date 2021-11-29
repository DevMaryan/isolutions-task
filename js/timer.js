function Timer(){
    var minute = 14;
    var second = 60;
    setInterval(function() {
      document.getElementById("the-time").innerHTML = minute + "  " + second;
      second--;
      if (second == 00) {
        minute --;
        second = 60;
        if (minute == 0) {
          minute = 5;
        }
      }
    }, 1000);
}

Timer();