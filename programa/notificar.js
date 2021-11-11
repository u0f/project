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
            Db.delete("aviso." + info.id);
            } else;
        }
    }, 0);

    }
    
})();