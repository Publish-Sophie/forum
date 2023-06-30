// app/list/ListItem.js

"use client";
import Link from "next/link";

export default function ListItem({ result }) {
  return (
    <div>
      {result.map(({ _id, title }) => (
        <div className="list-item">
          <h4>
            <Link prefetch={false} href={`/detail/${_id}`}>
              {title}
            </Link>
          </h4>
          <Link className="btn" href={`/edit/${_id}`}>
            ✏
          </Link>
          <button
            className="btn"
            onClick={() => {
              fetch("/api/post/delete", {
                method: "POST",
                body: _id,
              });
            }}
          >
            🗑
          </button>
          <p>1월 1일</p>
        </div>
      ))}
    </div>
  );
}
