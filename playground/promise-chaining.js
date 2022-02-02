require('../src/db/mongoose')

const User = require('../src/models/user')

// User.findByIdAndUpdate('61da778c1d3725aeab25343e', {age: 38}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 38})
// }).then((result)=> {
//     console.log(result)
// }).catch ((e) =>{
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('61da778c1d3725aeab25343e', 38).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})