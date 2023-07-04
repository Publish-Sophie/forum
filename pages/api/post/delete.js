// pages/api/post/delete.js

import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const { id } = req?.query;
  // console.log(req.query?.id);
  let session = await getServerSession(req, res, authOptions);

  if (req.method == "POST") {
    let db = (await connectDB).db("forum");
    let getUser = await db
      .collection("post")
      .findOne({ _id: new ObjectId(id) });
    if (getUser.author === session.user.email) {
      await db.collection("post").deleteOne({
        _id: new ObjectId(id),
      });
      res.status(200).json("삭제완료");
    } else {
      return res.status(500).json("작성자 불일치로 삭제 불가");
    }
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
