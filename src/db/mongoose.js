const mongoose = require('mongoose')
// const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api').then(() => {
    console.log("DB Connection successful");
 }).catch((e) => console.log("No connection"))



// const me = new User({
//     name: '   Jinx   ',
//     email: 'jinx@ll.com ',
//     password: 'short Password'
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((err)=>{
//     console.log('Error: ', err)
// })


// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })

// const task = new Task({description: ' Eat lunch'})
// task.save().then(()=>{
//     console.log(task)
// }).catch((err)=>{
//     console.log('Error: ', err)
// })

