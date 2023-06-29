import { connectDB } from "/util/database.js";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map(({ _id, title }) => (
        <div className="list-item">
          <h4>
            <Link prefetch={false} href={`/detail/${_id}`}>
              {title}
            </Link>
          </h4>
          <Link href={`/edit/${_id}`}>🖍</Link>
          <p>1월 1일</p>
        </div>
      ))}
    </div>
  );
}
