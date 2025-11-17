import React, { useEffect, useState } from "react";

export default function Post({ src, caption, initialLikes = 0 }) {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    // simple side effect example
    console.log(`Mounted post: ${caption}`);
  }, [caption]);

  const toggleLike = () => {
    setIsLiked(prev => !prev);
    setLikes(l => (isLiked ? Math.max(0, l - 1) : l + 1));
  };

  return (
    <article className="post">
      <p>{caption}</p>
      <img src={src} alt={caption} />
      <div className="post-actions">
        <button className={`like-btn ${isLiked ? "liked" : ""}`} onClick={toggleLike}>
          {isLiked ? "♥" : "♡"}
        </button>
        <span className="likes-count">{likes} like{likes === 1 ? "" : "s"}</span>
      </div>
    </article>
  );
}
