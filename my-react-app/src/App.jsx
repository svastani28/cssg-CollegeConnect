import React from "react";
import { Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ProfilePage />} />
      <Route path="/edit" element={<EditProfilePage />} />
    </Routes>
  );
}
