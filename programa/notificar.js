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

(async () => {

    const dbReturn = await checkDB(Db, "aviso");
          arrayInfo = objectToArray(dbReturn)
    
    for(let i=0; i < arrayInfo.length; i++){
        console.log(arrayInfo[i])
        const info = arrayInfo[i]
  
    }
    
})();

/*
        var notified = false
      while(true == true) {

            if(info.endTimestamp < Math.floor(new Date().getTime()/1000) && notified == false) {
                console.log("Se te va a renovar la suscripción de " + info.service)
                notified = true
            }
        }
*/