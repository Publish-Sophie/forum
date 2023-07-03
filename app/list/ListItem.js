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
            onClick={(e) => {
              // fetch("/api/post/delete", {
              //   method: "POST",
              //   body: _id,
              // }).then(() => {
              //   e.target.parentElement.style.opacity = 0;
              //   setTimeout(() => {
              //     e.target.parentElement.style.display = "none";
              //   }, 1000);
              // });
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
