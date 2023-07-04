import { MongoClient } from "mongodb";
require("dotenv").config();
const { REACT_APP_API_PW } = process.env;
const url = `mongodb+srv://admin:${REACT_APP_API_PW}@cluster0.x5k5nmj.mongodb.net/forum?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true };
let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}
export { connectDB };
