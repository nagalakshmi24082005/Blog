import {BrowserRouter as Router , Routes,Route}  from 'react-router-dom';
import React from 'react'
import IndexPage from './pages/IndexPage';
import { UserContextProvider } from './UserContext';
import ResgistrationPage from './pages/ResgistrationPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import CreateBlogPage from './pages/CreateBlogPage'; 
import MyBlogsPage from './pages/MyBlogsPage.js';
import Contact from './pages/Contact';
import Subscription from './pages/Subscription.js';
import Profile from './pages/Profile.js';
 const App = () => {
 
   
return (
    <UserContextProvider> 
    <div>
    <Router>
        <Routes>
       
        <Route path='/' element = {<IndexPage/>}></Route>
        <Route path='/register' element={<ResgistrationPage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/home' element={<HomePage/>}></Route>
        <Route path='/createblogpage' element={<CreateBlogPage/>} />
        <Route path='/myblogspage' element={<MyBlogsPage />} />
         <Route path='/contact' element={<Contact />} />
         <Route path='/subscription' element={< Subscription/>} />
         <Route path='/profile' element={< Profile/>} />
       
       
        </Routes>
        </Router>
    </div>
    </UserContextProvider>
  )
} 

export default App;
 