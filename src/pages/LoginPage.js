// import { useContext, useState } from "react";
// import { Navigate, Link } from "react-router-dom";
// import { UserContext } from "../UserContext";
// import "./LoginPage.css";

// export default function LoginPage() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [redirect, setRedirect] = useState(false);
//   const { setUserInfo } = useContext(UserContext);

//   async function login(ev) {
//     ev.preventDefault();

//     try {
//       const response = await fetch("http://localhost:4000/login", {
//         method: "POST",
//         body: JSON.stringify({ username, password }),
//         headers: { "Content-Type": "application/json" },
//       });

//       if (response.ok) {
//         const userInfo = await response.json();
//         setUserInfo(userInfo);
//         alert("Login Successful");
//         setRedirect(true);  // Set redirect to true after successful login
//       } else {
//         alert("Invalid username or password");
//       }
//     } catch (err) {
//       console.error("Error during login:", err);
//       alert("Login failed. Please try again.");
//     }
//   }

//   if (redirect) {
//     return <Navigate to="/home" />;  // Redirect to HomePage after successful login
//   }

//   return (
//     <div className="login-container">
//       <h1 className="login-title">Login</h1>
//       <form onSubmit={login}>
//         <input
//           type="text"
//           placeholder="Username"
//           className="login-input"
//           value={username}
//           onChange={(ev) => setUsername(ev.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="login-input"
//           value={password}
//           onChange={(ev) => setPassword(ev.target.value)}
//         />
//         <button type="submit" className="login-button">Login</button>
//       </form>
//       <p className="switch-page-text">
//         Don't have an account? <Link to="/register">Create one here</Link>
//       </p>
//     </div>
//   );
// }
 

import { useContext, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import "../css/LoginPage.css";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [message, setMessage] = useState("");  
  const { setUserInfo } = useContext(UserContext);

  async function login(ev) {
    ev.preventDefault();
    setMessage("");  

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        const userInfo = await response.json();
        setUserInfo(userInfo);
        setMessage("Login Successful! Redirecting...");
        setTimeout(() => setRedirect(true), 2000);  
      } else {
        setMessage("Invalid username or password");
      }
    } catch (err) {
      console.error("Error during login:", err);
      setMessage("Login failed. Please try again.");
    }
  }

  if (redirect) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form onSubmit={login}>
        <input
          type="text"
          placeholder="Username"
          className="login-input"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button type="submit" className="login-button">Login</button>
      </form>
      {message && <p className="login-message">{message}</p>} 
      <p className="switch-page-text">
        Don't have an account? <Link to="/register">Create one here</Link>
      </p>
    </div>
  );
}
