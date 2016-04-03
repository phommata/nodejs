var MongoClient = require('mongodb').MongoClient,
  assert = require('assert');
// Connection URL 
var url = 'mongodb://localhost:27017/';
// Use connect method to connect to the Server 
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  if(err){
    console.log("Connection Failed to server.");
  } else {
    db.db("test");
    if (db){
      console.log("Connected correctly to server");
      db.authenticate("dbadmin", "test", function(err, result){
        if (err){
          console.log("Authentication failed . . .");
          db.close();
          console.log("Connection closed . . .");
        }else {
          console.log("Authenticated . . .");
          db.logout(function(err, result) {
            if(!err){
              console.log("Logged out . . .");
            }
            db.close();
            console.log("Connection closed . . .");
          });
        }        
      });
    }
  }
});