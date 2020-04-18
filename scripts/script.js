let workTime = 25;
let breakTime = 5;

let isBreakTime = false;
let pause = false;

function startTimer(minutes) {
    let seconds = minutes * 60;
    let minuteDisplay = minutes - 1;
    let timer = setInterval(() => {
        seconds--;
        if (seconds % 60 == 0) {
            minuteDisplay--;
        }
        document.querySelector("#time").textContent = minuteDisplay + ":" + (seconds % 60); 
        if (seconds <= 0) {
            clearInterval(timer);
            if (!isBreakTime) {
                console.log("You get in here");
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

startTimer(1);
