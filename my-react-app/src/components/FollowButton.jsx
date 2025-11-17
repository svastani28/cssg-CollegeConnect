import React, { useEffect, useState } from "react";

export default function FollowButton({ initialFollowing = false, onChange }) {
  const [isFollowing, setIsFollowing] = useState(initialFollowing);

  useEffect(() => {
    onChange?.(isFollowing);
  }, [isFollowing, onChange]);

  return (
    <button
      className={`follow-btn ${isFollowing ? "following" : ""}`}
      onClick={() => setIsFollowing(prev => !prev)}
    >
      {isFollowing ? "Following" : "Follow"}
    </button>
  );
}
