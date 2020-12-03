const clock = document.getElementById("clock");
window.onload = () => {
    startClock();
};

function startClock() {

    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    const result = hours + ":" + minutes + ":" + seconds;

    clock.innerHTML = result;

    setInterval(() => {
        startClock();
    }, 1000);

}