// import React from 'react'

// const Post = () => {
//   return (
//     <div>
//       This is my Posts
//     </div>
//   )
// }

// export default Post;

import React from 'react';
 

const Post = () => {
  return (
    <div>
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" 
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" 
        crossOrigin="anonymous" 
        referrerPolicy="no-referrer" 
      />
      <footer>
        <div className="foot1">
          <div className="foot2">
            {/* Replace with your personal links */}
            <a href="https://github.com/nagalakshmi24082005" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/nagalakshmi-s-cse-b399722a5/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/dad_princess_nisha2005" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://wa.me/9003046993" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
        <div className="bar">
          <p>
            Copyright &copy;2025; Designed by <b>Nagalakshmi</b>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Post;
