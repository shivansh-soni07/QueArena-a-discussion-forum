const mongoose = require("mongoose");

const url =
  "mongodb://shivansh:shivansh07@cluster0-shard-00-00.kgmr5.mongodb.net:27017,cluster0-shard-00-01.kgmr5.mongodb.net:27017,cluster0-shard-00-02.kgmr5.mongodb.net:27017/discuss-database?ssl=true&replicaSet=atlas-upxghj-shard-0&authSource=admin&retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};
