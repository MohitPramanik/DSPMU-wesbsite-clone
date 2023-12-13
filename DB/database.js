const {
    createPool
} = require('mysql');

const pool = createPool({
    host: "localhost:3306",
    user:"root",
    password:"mohit080603.com",
    database:"college",
    connectionLimit:10
});

pool.query(`INSERT INTO studentLogin(registrationNo, password)`, (err, result, fields)=>{
    if(err){
        return console.log(err);
    }
    return console.log(result);
})