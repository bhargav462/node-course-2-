const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
 if(err){
     console.log('Unable to connect to the database');
 }
 console.log("Successfully connected to the database");
db.collection('Users').findOneAndUpdate({
    _id:new ObjectID('5cc5977c45d7260838b92703')
},{
    $set:{
        name:'Nakkina'
    },
    $inc:{
        age:-20
    }
},{
    returnObject:false
}).then((res) => {
    console.log(res);
});
 db.close(); 
});