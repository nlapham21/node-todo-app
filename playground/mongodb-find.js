const {MongoClient, ObjectID} = require('mongodb'); //Identical to above

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to monogdb server', err);
    }
    console.log('Connected to mongodb server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({ 
    //     _id: new ObjectID('5bfae0dd966398618f82adf3')
    // }).toArray().then((docs) => {
    //     console.log('Todos:');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({
        name: 'Nolan'
    }).toArray().then((users) => {
        console.log('Users:');
        console.log(JSON.stringify(users, undefined, 2));
    }).catch((err) => {
        console.log('Unable to retrieve filtered users', err);
    });

    // client.close();
});