// pages/api/post/delete.js

import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  const { id } = req?.query;
  // console.log(req.query?.id);

  if (req.method == "POST") {
    let db = (await connectDB).db("forum");
    await db.collection("post").deleteOne({
      _id: new ObjectId(id),
    });
    res.status(200).json("삭제완료");
  }
}

/* export default async function handler(요청, 응답) {
  if (요청.method == 'POST'){
    let db = (await connectDB).db('forum')
    let result = await db.collection('post').deleteOne({_id : new ObjectId(요청.body)});
    console.log(result)
    응답.status(200).json('삭제완료')
  }
} */
