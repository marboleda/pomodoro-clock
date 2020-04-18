let workTime = 25;
let breakTime = 5;
const stopButton = document.querySelector("#stop-button");
const startButton = document.querySelector("#start-button");
const timeDisplay = document.querySelector("#time");
let isBreakTime = false;
let isPaused = false;
let timer;
let currentMinutes;
let currentSeconds;

function startTimer(minutes, seconds) {
    let totalSeconds = minutes * 60 + seconds;
    let minutesDisplay = minutes;

    if (minutes != 0) {
        minuteDisplay = minutes - 1;
    }
    
    timer = setInterval(() => {
        totalSeconds--;

        if ((totalSeconds % 60 == 0) && totalSeconds != 0) {
            minuteDisplay--;
        }

        timeDisplay.textContent = minuteDisplay + ":" + (totalSeconds % 60); 

        if (totalSeconds <= 0) {
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
    isPaused = true;
});

startButton.addEventListener("click", function(e) {
    if (isPaused) {
        isPaused = false;
        startTimer(currentMinutes, currentSeconds);
    }
})

startTimer(1, 0);
