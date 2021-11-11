const Db = require('quick.db');

async function checkDB(db, args){
    if(db.get(args) == null) {
        return console.log("Esta DB no existe")
    } else return db.get(args)
}

const objectToArray = obj => {
    const keys = Object.keys(obj);
    const res = [];
    for(let i = 0; i < keys.length; i++){
       res.push(obj[keys[i]]);
    };
    return res;
 };

 //funcion days to seconds
function daysToSeconds(days) {
    return days * 86400
}

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

(async () => {

    const dbReturn = await checkDB(Db, "aviso");
    var arrayInfo = objectToArray(dbReturn)
    
          console.log(arrayInfo.length)
    var i = 0
    for(i; i < arrayInfo.length; i++) {

        const info = arrayInfo[i]
        console.log(info)
    setInterval( async () => {

        const dbUpdate = await checkDB(Db, "aviso");
        arrayInfo = objectToArray(dbUpdate)

        if(info.endTimestamp < Math.floor(new Date().getTime()/1000)) {

            if(Db.has("aviso." + info.id)) {
            console.log(arrayInfo)
            console.log("Se te va a renovar la suscripción de " + info.service)
            if(info.every > 0) {
                var idAviso = id(9),
                currentDateTimestamp = Math.floor(new Date().getTime()/1000)
                Db.delete("aviso." + info.id);
                Db.set("aviso."+idAviso, {"id": idAviso, "service": info.service, "endTimestamp": currentDateTimestamp + daysToSeconds(info.every), "every": info.every});
                console.log("Autorenovación cada mes: " + currentDateTimestamp + daysToSeconds(info.every))

            } else if(info.type == 0) {
            Db.delete("aviso." + info.id);
            } else Db.delete("aviso." + info.id);
            } else;
        }
    }, 0);

    }
    
})();