// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import './IndexPage.css';

// const IndexPage = () => {
//   const navigate = useNavigate(); // Initialize the useNavigate hook

//   // Function to handle the button click and navigate to the login page
//   const handleGetStartedClick = () => {
//     navigate('/login'); // Navigate to the login page
//   };

//   return (
//     <div>
//       <div className="blog-description">
//         <p>
//           Blogs are a great way to share your thoughts, ideas, and experiences with the world.<br />
//           Whether you're writing about technology, lifestyle, or personal stories, your blog<br />
//           is your personal space to express creativity and connect with others.
//         </p>
//       </div>

//       {/* Get Started Button */}
//       <div className="get-started-container">
//         <button className="get-started-button" onClick={handleGetStartedClick}>
//           Get Started
//         </button>
//       </div>
//     </div>
//   );
// }

// export default IndexPage;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';  

// const IndexPage = () => {
//   const navigate = useNavigate();  
 
//   const handleGetStartedClick = () => {
//     navigate('/login'); 
//   };

//   return (
//     <div style={{ textAlign: 'center', padding: '20px',marginTop:'300px'}}>
      
//       <h1>Welcome to My Blog Platform!</h1>
//       <p>
//         Share your thoughts, ideas, and experiences with the world. Start your blogging journey today!
//       </p>
      
     
//       <button 
//         onClick={handleGetStartedClick} 
//         style={{
//           backgroundColor: '#007BFF', 
//           color: 'white', 
//           padding: '10px 20px', 
//           border: 'none', 
//           borderRadius: '5px', 
//           cursor: 'pointer', 
//           fontSize: '16px'
//         }}
//       >
//         Get Started
//       </button>
//     </div>
//   );
// };

// export default IndexPage;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/IndexPage.css';  // Import the CSS file

const IndexPage = () => {
  const navigate = useNavigate();  

  const handleGetStartedClick = () => {
    navigate('/login'); 
  };

  return (
    <div className="index-page-container">
      <h1>Welcome to My Blog Platform!</h1>
      <p>
        Share your thoughts, ideas, and experiences with the world. Start your blogging journey today!
      </p>
      
      <button 
        onClick={handleGetStartedClick} 
        className="index-page-button"  // Apply class name for button
      >
        Get Started
      </button>
    </div>
  );
};

export default IndexPage;
