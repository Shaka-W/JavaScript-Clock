function time() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let format = hours >= 12 ? 'PM' : 'AM';
    
    if (hours === 12) {
        hours = 12;
    } else {
        hours %= 12;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    setClock(hours, minutes, seconds, format);
};

function setClock(hours, minutes, seconds, format) {
    const outputHour = document.querySelector('.hour');
    const outputMinute = document.querySelector('.minute');
    const outputSecond = document.querySelector('.second');
    const amOrPm = document.querySelector('.am-pm');

    outputHour.textContent = hours;
    outputMinute.textContent = minutes;
    outputSecond.textContent = seconds;
    amOrPm.textContent = format;
}

function displayTime() {
    time();
    setInterval(time, 1000);
};

window.addEventListener('load', displayTime);