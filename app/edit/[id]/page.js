import { ObjectId } from "mongodb";
import { connectDB } from "/util/database.js";

export default async function Edit(props) {
  const { id } = props?.params;

  const db = (await connectDB).db("forum");
  let result = await db.collection("post").findOne({
    _id: new ObjectId(id),
  });

  return (
    <div className="p-20">
      <h2>수정페이지임</h2>
      <form action="/api/post/edit" method="POST">
        <input name="title" placeholder="글제목" defaultValue={result.title} />
        <input
          name="content"
          placeholder="글내용"
          defaultValue={result.content}
        />
        <input id={"id"} name="_id" defaultValue={result._id.toString()} />
        <button type="submit">수정</button>
      </form>
      {/* <h4>{result.title}</h4>
      <p>{result.content}</p> */}
    </div>
  );
}
