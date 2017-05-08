const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '59106222550dd58d4acea35c';

User.findById(id).then((user) => {
    if (!user) {
        return console.log('User not found');
    };
    console.log('User by Id: ',user);
}).catch((e) => {
    console.log(e);
});
