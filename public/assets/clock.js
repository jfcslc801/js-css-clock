// set date function
function setDate() {

    const now = new Date();
    // seconds hand
    const secondHand = document.querySelector('.second-hand');
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // minute hand
    const minHand = document.querySelector('.min-hand');
    const mins = now.getMinutes();
    const minDegrees = ((mins / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    // hour hand
    const hourHand = document.querySelector('.hour-hand');
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}
// set interval at 1 second
setInterval(setDate, 1000);