const db = require('quick.db');
/**
 * 
 * Functions to get the time
 * 
 */

//function to hours to seconds
function hoursToSeconds(hours) {
    return hours * 3600
}

//funcion days to seconds
function daysToSeconds(days) {
    return days * 86400
}

//function minutes to seconds
function minutesToSeconds(minutes) {
    return minutes * 60
}

/***************************************/
const service = "PSN",
      daysToAdd = daysToSeconds(0),
      hoursToAdd = hoursToSeconds(0),
      minutesToAdd = minutesToSeconds(0),
      secondsToAdd = 30,
      allSeconds = daysToAdd + hoursToAdd + minutesToAdd + secondsToAdd

var currentDateTimestamp = Math.floor(new Date().getTime()/1000),
    timeadded = false,
    addtime;

if(timeadded == false){
    addtime = currentDateTimestamp + allSeconds
    db.set("aviso." + service, {"service": service, "endTimestamp": addtime});
    console.log("Time added: " + addtime)
    console.log("Current timestamp: " + currentDateTimestamp)
    timeadded = true
}