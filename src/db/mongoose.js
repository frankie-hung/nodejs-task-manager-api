const mongoose = require('mongoose')
// const validator = require('validator')

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("DB Connection successful");
 }).catch((e) => console.log("No connection"))
