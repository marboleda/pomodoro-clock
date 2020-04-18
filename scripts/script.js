let workTime = 25;
let breakTime = 5;

let isBreakTime = false;
let pause = false;

function timer(minutes) {
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
        }
    }, 1000)
}


