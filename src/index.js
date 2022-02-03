const express = require('express')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
require('./db/mongoose')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {

//     if (req.method === 'GET'){
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })


// app.use((req, res, next) => {
//     res.status(503).send('Website is currently under maintenance')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async()=>{
    // const task = await Task.findById('61fab2003e8462d37c11a7b4')
    // await task.populate('owner')
    // console.log(task.owner)

    // const user = await User.findById('61faae34e7ff2df8be5e98ba')
    // await user.populate('tasks')
    // console.log(user.tasks)
}

main()