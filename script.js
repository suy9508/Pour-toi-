const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minsElement = document.getElementById('minutes');
const secondsElement = document.getElementById('секунды');


const targetDate = "01 sept 2023";

function countdown() {
		// инициализация значений
    const newTargetDate = new Date(targetDate);
    const currentDate = new Date();

    const totalSeconds = new Date(newTargetDate - currentDate) / 1000;

	 // блок вычислений
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

	 // присваиваем в hrml значения
    daysElement.innerHTML = formatTime(days);
    hoursElement.innerHTML = formatTime(hours);
    minsElement.innerHTML = formatTime(mins);
    secondsElement.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

// initial call
countdown();

setInterval(countdown, 1000);