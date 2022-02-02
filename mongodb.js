// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectId

const { MongoClient, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.id)
// console.log(id.toHexString())
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to database!')
    }
    console.log('Connected correctly!')

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Chu Chu',
    //     age: 25
    // }, (err, result) => {
    //     if (err) return console.log('Unable to insert user')

    //     console.log('hello')
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     }, {
    //         name: 'Gunther',
    //         age: 27
    //     }
    // ], (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert documents.')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Cooking',
    //         completed: true 
    //     }, {
    //         description: 'Eating',
    //         completed: false
    //     }, {
    //         description: 'Sleeping',
    //         completed: false
    //     }
    // ], (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert documents.')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').findOne({ _id: new ObjectID("61d9bca336ca48ca56b03f45")}, (err, user) => {
    //     if (err) return console.log('Unable to fetch')

    //     console.log(user)
    // })

    // db.collection('users').find({ age:{ $gt : 30 } }).toArray((err, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({ age:{ $gt : 30 } }).count((err, count) => {
    //     console.log(count)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectId("61d9c10bf3d77788811cde8e")}, (err, tasks) => {
    //     console.log(tasks)
    // })

    // db.collection('tasks').find({ completed: false}).toArray((err, tasks) => {
    //     console.log(tasks)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectId("61d9bc1fc84d79292a69ecd3")
    // }, {
    //     // $set: {
    //     //     name: 'Mike'
    //     // }
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((err) => {
    //     console.log(err)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((err) => {
    //     console.log(err)
    // })


    // db.collection('users').deleteMany({
    //     age: 27
    // }).then((result) => {
    //     console.log(result)
    // }).catch((err) => {
    //     console.log(err)
    // })

    // db.collection('tasks').deleteOne({
    //     description: 'Sleeping'
    // }).then((result) => {
    //     console.log(result)
    // }).catch((err) => {
    //     console.log(err)
    // })


})


