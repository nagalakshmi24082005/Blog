// import React, { useState } from 'react';
// import './Contact.css';
// import Post from '../Post';
// const Contact = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [subject, setSubject] = useState('');
//   const [message, setMessage] = useState('');
//   const [status, setStatus] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!name || !email || !subject || !message) {
//       setStatus('Please fill in all fields.');
//       return;
//     }

//     const contactData = {
//       name,
//       email,
//       subject,
//       message,
//     };

//     try {
//       // Simulate an API request to submit the form (replace with your actual API)
//       setStatus('Sending message...');
//       setTimeout(() => {
//         console.log('Message sent:', contactData);
//         setStatus('Message sent successfully!');
//         // Reset the form
//         setName('');
//         setEmail('');
//         setSubject('');
//         setMessage('');
//       }, 2000);
//     } catch (error) {
//       setStatus('Failed to send message. Please try again later.');
//     }
//   };

//   return (
//     <div className="contact-container">
    
//       <h2>Contact Us</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Enter your name"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="subject">Subject</label>
//           <input
//             type="text"
//             id="subject"
//             value={subject}
//             onChange={(e) => setSubject(e.target.value)}
//             placeholder="Enter the subject"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="message">Message</label>
//           <textarea
//             id="message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             placeholder="Write your message"
//             required
//           />
//         </div>

//         <button type="submit" className="submit-button">
//           Send Message
//         </button>
//       </form>

//       {status && <p className="status-message">{status}</p>}
//       <div>
//        <div>
//       <Post/>
//     </div>
//       </div>
//     </div>
    
//   );
// };

// export default Contact;

import React from "react";
import "../css/Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt} from "react-icons/fa";
import Post from "../Post";

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Hero Section */}
      <div className="hero">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you! Reach out to us through any of the channels below.</p>
      </div>

      {/* Contact Info Section */}
      <div className="contact-info">
        <div className="info-card">
          <FaMapMarkerAlt className="icon" />
          <h3>Our Address</h3>
          <p>123 Main Street, Cityville, Country</p>
        </div>

        <div className="info-card">
          <FaEnvelope className="icon" />
          <h3>Email Us</h3>
          <p>contact@example.com</p>
        </div>

        <div className="info-card">
          <FaPhone className="icon" />
          <h3>Call Us</h3>
          <p>+123 456 7890</p>
        </div>
      </div>

      
      {/* Post Component */}
      <div className="post-section">
        <Post />
      </div>
    </div>
  );
};

export default Contact;
