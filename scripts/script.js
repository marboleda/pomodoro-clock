let workTime = 25;
let breakTime = 5;
const stopButton = document.querySelector("#stop-button");
const timeDisplay = document.querySelector("#time");
let isBreakTime = false;
let pause = false;
let timer;
let currentMinutes;
let currentSeconds;

function startTimer(minutes) {
    let seconds = minutes * 60;
    let minuteDisplay = minutes - 1;
    
    timer = setInterval(() => {
        seconds--;

        if ((seconds % 60 == 0) && seconds != 0) {
            minuteDisplay--;
        }

        timeDisplay.textContent = minuteDisplay + ":" + (seconds % 60); 

        if (seconds <= 0) {
            clearInterval(timer);

            if (!isBreakTime) {
                isBreakTime = true;
                startTimer(breakTime);
            }
            else {
                isBreakTime = false;
                startTimer(workTime);
            }
        }

    }, 1000)
}

stopButton.addEventListener("click", function(e) {
    clearInterval(timer);
    let minutesAndSeconds = timeDisplay.textContent.split(":");
    currentMinutes = minutesAndSeconds[0];
    currentSeconds = minutesAndSeconds[1];
});

startTimer(1);
