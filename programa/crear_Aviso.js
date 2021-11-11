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

/**
 * Extra function to generate ID
 * 
 */

 function id(x) {

    if(!x) throw Error("No length specified")
        var length = x,
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
            retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    
}

/***************************************/

const service = "Netflix",
      daysToAdd = daysToSeconds(0),
      hoursToAdd = hoursToSeconds(0),
      minutesToAdd = minutesToSeconds(0),
      secondsToAdd = 20,
      allSeconds = daysToAdd + hoursToAdd + minutesToAdd + secondsToAdd

var idAviso = id(9),
    currentDateTimestamp = Math.floor(new Date().getTime()/1000),
    timeadded = false,
    addtime;

if(timeadded == false){
    addtime = currentDateTimestamp + allSeconds
    db.set("aviso."+idAviso, {"id": idAviso, "service": service, "endTimestamp": addtime});
    console.log("Time added: " + addtime)
    console.log("Current timestamp: " + currentDateTimestamp)
    timeadded = true
}