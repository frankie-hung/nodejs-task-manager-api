require('../src/db/mongoose')

const Task = require('../src/models/task')
//ObjectId("61e29899e6526e6a1505862f")

// Task.findByIdAndDelete('61e29899e6526e6a1505862f').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result)=> {
//     console.log(result)
// }).catch ((e) =>{
//     console.log(e)
// })

const deleteTaskAndCount = async(id)=> {
    await Task.findByIdAndDelete(id)
    return Task.countDocuments({completed: false})
} 

deleteTaskAndCount('61da72e9c51fa7e0b070a340').then((result)=>{
    console.log(result)
}).catch ((e) =>{
    console.log(e)
})