// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    };
    console.log('Connected to MongoDB server.');

    db.collection('Todos').insertOne({
        text: 'Walk the dog',
        completed: true
    }, (err, result) => {
        if (err) {
            return console.log('unable to insert todo.', err);
        };
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.collection('Users').insertOne({
        name: 'Svend',
        age: 46,
        location: 'Roskilde'
    }, (err, result) => {
        if (err) {
            return console.log('unable to insert user.', err);
        };
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
});
