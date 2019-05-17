const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err){
        console.log('Unable to connect to the database ');
    }
    console.log('Successfully connected to the database');
    db.collection('Todos').insertOne({
        name:'Bhargav N',
        Branch: 'CSE'
    },(err,res) => {
       if(err) {
           console.log('Unable to write data to the database');
       }
       console.log(JSON.stringify(res.ops,undefined,2));
    }
    );
    db.collection('Todos').find().count().then((count) => {
        console.log('Todos');
        console.log(count);
    },(err) => {
        console.log('Unable to fetch the data',err);
    });
 
     db.close();
});