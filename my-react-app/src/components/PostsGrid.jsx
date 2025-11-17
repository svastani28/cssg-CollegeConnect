import React from "react";
import Post from "./Posts";

export default function PostsGrid({ posts }) {
  return (
    <div className="post-grid">
      {posts.map(p => (
        <Post key={p.id} src={p.src} caption={p.caption} initialLikes={p.likes} />
      ))}
    </div>
  );
}
