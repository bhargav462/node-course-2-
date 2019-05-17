// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err){
        return console.log('Unable to connect to the database ');
    }
    console.log('Successfully connected to the database');
    // db.collection('Todos').insertOne({
    //   text:'Something to do',
    //   completed: false
    // },(err,result) => {
    //   if(err){
    //       return console.log('Unable to insert todo');
    //   }
    //   console.log(JSON.stringify(result.ops,undefined,2));
    // });

    // db.collection('Users').insertOne({
    //     name:'Bhargav',
    //     age:19,
    //     location:'Vizag'
    // },(err,result) => {
    //      if(err){
    //          return console.log('Unable to insert the data to the database');
    //      }
    //      console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});
