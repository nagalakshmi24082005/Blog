// import React, { useContext } from 'react';
// import { UserContext } from '../UserContext';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import './HomePage.css';

// const HomePage = () => {
//   const { setUserInfo, user } = useContext(UserContext);
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleLogout = () => {
//     setUserInfo(null); // Clear user info from context
//     navigate('/login'); // Navigate to login page after logout
//   };

//   return (
//     <div className="home-container">
//       <p>{user ? `Hello, ${user.name}!` : 'Welcome to the platform. Please log in.'}</p>
//       <p>Here you can find various blogs and create your own posts. Feel free to explore, read, and contribute!</p>
      
//       {user && (
//         <button className="create-post-button" onClick={() => navigate('/create-post')}>
//           Create a Post
//         </button>
//       )}

      
//     </div>
//   );
// };

// export default HomePage;


 
import '../css/HomePage.css';
import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';  

const HomePage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();  

  
  const handleCreatePostClick = () => {
    navigate('/create-blog');  
  };

  return ( 
    <div className="home-container">
      <div> 
        <Header/>
      </div>
      <p>Welcome to MyBlogPage!</p>
      
   
      {user && (
        <div className="create-blog-container">
          <button className="create-blog-button" onClick={handleCreatePostClick}>
            Create Blog
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;

