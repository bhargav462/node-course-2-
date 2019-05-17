const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err){
      console.log("Unable to connect to the database");
  }
  console.log('Successfully connected to the database');

  //DeleteMany
//   db.collection('Todos').deleteMany({text:'Delete me'}).then((res) => {
//     console.log('Records were deleted');
//       console.log(res);
//   },(err) => {
//       console.log('Unable to delete the data');
//   });
 
//DeleteOne
// db.collection('Todos').deleteOne({text:'Delete me'}).then((res) => {
//     console.log(res);
// });


  //findOneAndDelete
//   db.collection('Todos').findOneAndDelete({text:'Delete me'}).then((res) => {
//       console.log(res);
//   })

 db.collection('Todos').findOneAndDelete({fun:false}).then((res) => {
     console.log(res);
 });

  db.close();
});