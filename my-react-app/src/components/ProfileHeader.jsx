import React from "react";

export default function ProfileHeader({ username, bio, profilePic }) {
  return (
    <header id="main-header">
      <img src="/instagram-logo.png" alt="Instagram logo" className="logo" />
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <h1>{username}</h1>
      <p className="bio">{bio}</p>
    </header>
  );
}
