import { Outlet } from "react-router-dom";

import PostList from "../components/PostList";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Error while fetching new posts");
  }
  return data.posts;
}
