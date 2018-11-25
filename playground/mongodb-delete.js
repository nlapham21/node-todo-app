const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to monogdb server', err);
    }
    console.log('Connected to mongodb server\n');
    const db = client.db('TodoApp');

    // deleteMany
    // db.collection('Todos').deleteMany({ text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({ text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete **
    // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
    //     console.log(result);
    // });

    // client.close();
});