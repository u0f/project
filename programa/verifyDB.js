const Db = require('quick.db');

async function checkDB(db, args){
    if(db.get(args) == null) {
        return console.log("Esta DB no existe")
    } else return console.log(db.get(args))
}


checkDB(Db, "aviso")