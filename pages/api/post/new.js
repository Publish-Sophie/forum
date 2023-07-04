import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답) {
  let session = await getServerSession(요청, 응답, authOptions);

  // console.log(session);
  if (session) {
    요청.body.author = session.user.email;
  }
  // console.log(요청.body);
  if (요청.method == "POST") {
    if (요청.body.title == "") {
      return 응답.status(500).json("제목써라");
    }
    try {
      let db = (await connectDB).db("forum");
      let result = db.collection("post").insertOne(요청.body);
      응답.redirect(302, "/list");
    } catch (error) {
      console.log(error);
    }
  }
}
