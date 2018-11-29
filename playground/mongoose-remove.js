const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.deleteMany({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndDelete();
// Todo.findByIdAndDelete();

Todo.findOneAndDelete({_id: '5bff45ab9d8cd739415c4c71'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndDelete('5bff45ab9d8cd739415c4c71').then((todo) => {
    console.log(todo);
});