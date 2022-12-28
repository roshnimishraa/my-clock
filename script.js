
function updateClock(){


let currentTime=new Date();
let currentHour=currentTime.getHours();
let currentMinutes=currentTime.getMinutes();
let currentSeconds=currentTime.getSeconds();

currentMinutes=(currentMinutes < 10 ? "0" : "") + currentMinutes;
currentSeconds=(currentSeconds < 10  ? "0" : "" ) + currentSeconds;

// Convert into AM/PM
currentHour=(currentHour > 12 ) ? currentHour-12 : currentHour;
currentHour=(currentHour == 0) ? 12 : currentHour;

// Choose AM/PM as per the time of the day
let timeOfDay = (currentHour <12 ) ? "AM" : "PM";

let currentTimeStr=currentHour + ":" + currentMinutes + ":" + currentSeconds + " "+timeOfDay;

document.getElementById("clock").innerHTML=currentTimeStr;

}