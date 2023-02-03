
const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secordsEl = document.getElementById('seconds')

const newYears = "1 Jan 2024";


function countdown(){
    const newYearDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) /1000; 

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const secords = Math.floor(totalSeconds) % 60;

    // console.log(days , hours , mins , secords);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secordsEl.innerHTML = formatTime(secords);

}

function formatTime(time){
    return time < 10 ? (`${time}`) : time;
}

countdown();

setInterval(countdown , 1000)