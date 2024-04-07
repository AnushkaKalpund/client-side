
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import ProtectedRoute from './components/ProtectedRoute';
import { useState } from 'react';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import FrontPage from './components/FrontPage';
import NewNavbar from './components/NewNavbar';

function App() {

  // // // check if user is logged in
  const [auth, setauth] = useState(true);
  const [auth1, setauth1] = useState(true);

  const isLoggedIn = async () => {
    try {
      const res = await fetch('/auth',{
        method : "GET",
        headers : {
          Accept : "application/json",
          "Content-Type" : "application/json"
        },
        credentials : "include"
      });
      

      if(res.status === 200){
        setauth(true)
        setauth1(false)
      }
      if(res.status === 401){
        setauth(false)
        setauth1(true)
      }
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    isLoggedIn();
  },[]);

  return (
    <>
    <Navbar auth ={auth}/>
    <Routes>
    <Route path="about" element={<About/>}/>
      <Route path="services" element={<Services/>}/>
      <Route  path="contact" element={<Contact/>}/>
      <Route path='login' element={<Login/>} />
      <Route path='register' element={<Register/>}/>
       {/* <Route exact path='dashboard' element={<ProtectedRoute/>}  auth ={auth}>  */}
      {/* <Route  path='dashbooard' element={<Dashboard/>}  /> */}
      {/* </Route> */}
      <Route exact path='logout' element={<ProtectedRoute/> } auth ={auth}>
      <Route  path='logout' element={<Logout/>} />
       </Route>
       <Route path="home" element={<Home/>}/>
      </Routes>
      <FrontPage />
     {/* <Contact /> */} 
    <Footer />
    </>
  );
}
export default App;
      

// --- written only for practice 
      {/* </Route> */}
      {/* <Route path='login' element={<Login/>} />
      <Route path='register' element={<Register/>} />
      <Route path='dashboard' element={<Dashboard/>} />
      <Route  path='logout' element={<Logout/>}/> */}
       

      {/* <Route exact path='login' element={<ProtectedRoute/>}>
      <Route exact path='login' element={<Login/>}/>
      </Route>
      <Route exact path='register' element={<ProtectedRoute/>}>
      <Route exact path='register' element={<Register/>}/>
      </Route>
      <Route exact path='dashboard' element={<ProtectedRoute/>}>
      <Route exact path='dashbooard' element={<Dashboard/>}/>
      </Route>
      <Route exact path='logout' element={<ProtectedRoute/>}>
      <Route exact path='logout' element={<Logout/>}/>
      </Route> */}
          {/* <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/login' element={<Login/>}/> */}
          {/* <Route path="home" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="services" element={<Services/>}/>
      <Route  path="contact" element={<Contact/>}/>
      <Route path='login' element={<Login/>} />
      <Route exact path='register' element={<Register/>}/>
      <Route exact path='dashboard' element={<ProtectedRoute/>}>
      <Route exact path='dashbooard' element={<Dashboard/>} auth={false}/>
      </Route>
      <Route exact path='logout' element={<ProtectedRoute/>}>
      <Route exact path='logout' element={<Logout/>} auth={false}/>
      </Route> */}



