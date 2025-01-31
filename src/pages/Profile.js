import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../pages/Profile.css"; 

const ProfileUpdate = () => {
  const navigate = useNavigate();
  
  // Initial user state
  const [user, setUser] = useState({
    username: "nagalakshmi",
    email: "nagalakshmi@example.com",
  });

  const [newUsername, setNewUsername] = useState(user.username);
  const [newEmail, setNewEmail] = useState(user.email);
  const [message, setMessage] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!newUsername.trim() || !newEmail.trim()) {
      setMessage("Fields cannot be empty.");
      return;
    }

    setUser({ username: newUsername, email: newEmail });
    setMessage("Profile updated successfully! A confirmation email has been sent.");

    setTimeout(() => setMessage(""), 3000);

    // Simulate sending an email
    window.location.href = `mailto:${newEmail}?subject=Profile Update Confirmation&body=Hi ${newUsername},%0D%0A%0D%0AYour profile has been updated successfully!`;
  };

  const handleLogout = () => {
    alert("Logged out successfully!");
    navigate("/"); 
  };

  return (
    <div className="profile-container">
      <h1>Update Your Profile</h1>

      {message && <p className="success-message">{message}</p>}

      <form onSubmit={handleUpdate} className="profile-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            name="username"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <button type="submit" className="btn update-btn">
          Update Profile
        </button>
      </form>

      <button onClick={handleLogout} className="btn logout-btn">
        Logout
      </button>
    </div>
  );
};

export default ProfileUpdate;
