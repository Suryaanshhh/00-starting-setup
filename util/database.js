const MongoDb = require("mongodb");
const MongoClient = MongoDb.MongoClient;
let _db;
const MongoConnect=(callback)=>{
    MongoClient.connect(
        "mongodb+srv://suryanshdwivedi615:GT7J8FxgWGXDnwDq@cluster0.cq4dtos.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
      )
        .then((client) => {
          console.log("Connected");
          _db=client.db("shop");
          callback()
        })
        .catch((err) => {
          console.log(err);
        });
      
};

const getDb=()=>{
  if(_db){
    return _db;
  }
  throw "No Db Found";
}


exports.MongoConnect=MongoConnect;
exports.getDb=getDb;


