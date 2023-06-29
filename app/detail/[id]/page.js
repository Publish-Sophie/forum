import { ObjectId } from "mongodb";
import { connectDB } from "/util/database.js";

export default async function Detail(props) {
  const { id } = props?.params;

  const db = (await connectDB).db("forum");
  let result = await db.collection("post").findOne({
    _id: new ObjectId(id),
  });

  return (
    <div>
      <h2>상세페이지임</h2>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  );
}
