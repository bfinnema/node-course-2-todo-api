// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    };
    console.log('Connected to MongoDB server.');

    db.collection('Users').findOneAndUpdate(
        {_id: new ObjectID('590c694291fb71967ef1d06f')}, {
            $set: {
                name: 'Youghurt'
            },
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        });
/*
    db.collection('Users').findOneAndUpdate(
        {_id: new ObjectID('590c694291fb71967ef1d06f')}, {
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        })
*/
    // db.close();
});
