const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to monogdb server', err);
    }
    console.log('Connected to mongodb server\n');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5bfb0ef52f6eb36b38b780c5')
    // }, {
    //     // update operator
    //     $set: {
    //         completed: true
    //     }
    // }, {returnOriginal: false}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').findOneAndUpdate({
    //     _id: ObjectID("5bfae33676167d61997bf863")
    // }, {
    //     $set: {
    //         name: 'Nolan'
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // }).catch((e) => {

    // });

    db.collection('Users').findOneAndUpdate({
        _id: ObjectID("5bfae33676167d61997bf863")
    }, {
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    }).catch((e) => {

    });

    // client.close();
});