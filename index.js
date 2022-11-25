let  seconds = 00;

let minutes = 00;

let hours = 00;

let increaseSecond =document.getElementById("seconds");

let increaseMinutes =document.getElementById("minutes");

let increaseHours =document.getElementById("hours");

let startButton = document.getElementById("start");

let stopButton = document.getElementById("pause");

let resetButton = document.getElementById("restart");

function startTimer(){
   seconds++;
   if (seconds < 0) {
    increaseSecond.innerHTML = "0" + seconds;
   }
   if (seconds > 0) {
    increaseSecond.innerHTML = seconds;
   }
   if (seconds > 60) {
    increaseSecond.innerHTML = "0" + seconds;
    seconds = 0;
    increaseSecond.innerHTML = "0" + 0;
   }
}

// startTimer();