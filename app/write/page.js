export default async function Write() {
  return (
    <div className="p-20">
      <h2>글작성</h2>
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="글제목" />
        <input name="content" placeholder="글내용" />
        <button type="submit">수정</button>
      </form>
    </div>
  );
}
