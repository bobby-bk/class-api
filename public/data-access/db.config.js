const mongoose=require('mongoose');
//const {url}=require('./configs/db.config')
console.log(process.env.URL);
mongoose.connect('mongodb://localhost:27017/group_db', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }).then(()=>{
    console.log("database connected")
}).catch(e=>{console.log("could not connect to DB")})
mongoose.Promise = global.Promise;