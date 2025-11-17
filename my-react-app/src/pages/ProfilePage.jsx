import React, { useEffect, useState } from "react";
import ProfileHeader from "../components/ProfileHeader";
import FollowButton from "../components/FollowButton";
import PostsGrid from "../components/PostsGrid";
import { Link } from "react-router-dom";
import "../styles.css";

export default function ProfilePage() {
  const [status, setStatus] = useState("Not following");
  const [posts, setPosts] = useState([
    { id: 1, caption: "Post 1", src: "/placeHolder.svg", likes: 2 },
    { id: 2, caption: "Post 2", src: "/placeHolder.svg", likes: 5 },
    { id: 3, caption: "Post 3", src: "/placeHolder.svg", likes: 1 },
  ]);

  useEffect(() => {
    console.log("ProfilePage mounted");
  }, []);

  return (
    <div className="container">
      <ProfileHeader
        username="@sanayvastani"
        profilePic="/profile-picture.JPG"
        bio={`I’m a sophomore at UNC-Chapel Hill pursuing Computer Science and Business.
Founder of FoodAware, Coded for Africa, and The Baking Room. I love building tech-driven solutions to real-world problems.`}
      />

      <div className="button-row">
        <a className="link" href="https://www.linkedin.com/in/sanayvastani">LinkedIn</a>
        <Link className="btn" to="/edit">Edit Profile</Link>
        <FollowButton
          initialFollowing={false}
          onChange={(following) => setStatus(following ? "Following" : "Not following")}
        />
      </div>

      <p className="status">Status: {status}</p>

      <section className="posts-section">
        <h2>Posts</h2>
        <PostsGrid posts={posts} />
      </section>
    </div>
  );
}
