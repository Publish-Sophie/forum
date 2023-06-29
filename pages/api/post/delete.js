// pages/api/post/delete.js

import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method == "DELETE") {
    console.log(req.body);
    let db = (await connectDB).db("forum");
    db.collection("post").deleteOne({
      _id: new ObjectId(req.body),
    });
  }
}
