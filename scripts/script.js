let workTime = 25;
let breakTime = 5;
const stopButton = document.querySelector("#stop-button");
const startButton = document.querySelector("#start-button");
const resetButton = document.querySelector("#reset-button");
const increaseSessionButton = document.querySelector("#increase-session-minutes");
const decreaseSessionButton = document.querySelector("#decrease-session-minutes");
const increaseBreakButton = document.querySelector("#increase-break-minutes");
const sessionDisplay = document.querySelector("#session-time");
const breakDisplay = document.querySelector("#break-time");
const timeDisplay = document.querySelector("#time");
let isBreakTime = false;
let isPaused = false;
let timer;
let currentMinutes;
let currentSeconds;

function startTimer(minutes, seconds) {
    let totalSeconds = minutes * 60 + seconds;
    let minuteDisplay = minutes;

    if (seconds == 0) {
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
});


resetButton.addEventListener("click", function(e) {
    isPaused = false;
    clearInterval(timer);
    startTimer(workTime, 0);
});

increaseSessionButton.addEventListener("click", function(e) {
    workTime++;
    sessionDisplay.textContent = workTime;
});

decreaseSessionButton.addEventListener("click", function(e) {
    if (workTime > 1) {
        workTime--;
        sessionDisplay.textContent = workTime;
    }
});

increaseBreakButton.addEventListener("click", function(e) {
    breakTime++;
    breakDisplay.textContent = breakTime;
})

startTimer(25, 0);
