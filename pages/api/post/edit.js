import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  const { _id, title, content } = req?.body;
  console.log(_id, title, content);
  if (req.method == "POST") {
    if (req.body.titlt === "") {
      return res.status(500).json("제목을 적어주세요.");
    }
    try {
      // console.log(req.body);
      let db = (await connectDB).db("forum");
      db.collection("post").updateOne(
        { _id: new ObjectId(_id) },
        { $set: { title: title, content: content } }
      );
      res.redirect(302, "/list");
    } catch (error) {
      console.log(error);
    }
  }
}
