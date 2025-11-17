import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function EditProfilePage() {
  useEffect(() => {
    console.log("EditProfilePage loaded");
  }, []);

  return (
    <div className="container">
      <h1>Edit Profile</h1>
      <p>This page could eventually let you change your bio or photo.</p>
      <Link to="/">← Back to Profile</Link>
    </div>
  );
}
