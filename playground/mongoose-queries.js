const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5bfe00f535258a19cdfb37c711';
var userId = '5bfb38fe4bafdb083978c4b9';

// How to validate id's
if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos:', todos);
});

Todo.findOne({
    _id: id
}).then((todos) => {
    console.log('Todo:', todos);
});

Todo.findById(id).then((todos) => {
    if (!todos) {
        return console.log('Id not found');
    }
    console.log('Todo:', todos);
}).catch((e) => console.log(e));

User.findById(userId).then((user) => {
    if (!user) {
        return console.log('Unable to find the user');
    }
    console.log(user);
}).catch((e) => console.log(e));