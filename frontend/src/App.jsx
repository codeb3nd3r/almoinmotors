import axios from "axios";
import { useState, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [isSigningUp, setIsSigningUp] = useState(null);
  const [Email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const callback =(data)=> {
    if(data){
    const {email,password}=data;
    setEmail(email)
    setPassword(password)
    }
  };
  const callback2=(bolean)=>{
    if (bolean===true) {
      setIsLoggedIn(true);
  }else{
    setIsLoggedIn(false);
    }
  }
  useEffect(() => {
    const validation = async () => {
      try {
        const response = await axios.get("http://localhost:5000/almoin/logindata");
        let emailFound = response.data.some(e => Email === e.email && password===e.password);
        console.log(emailFound); 
        if (emailFound) {
          setIsLoggedIn(true);
          alert("logging in.......")
        } else {
          setIsLoggedIn(false);
          alert("User not found")
        }
      } catch (error) {
        console.log(error);
        setIsLoggedIn(false);
      }
    };
  
    // Call validation only if Email is set
    if (Email) {
      validation();
    }
  }, [Email]);
  
  const handleSignupClick = () => {
    setIsSigningUp(true);
  };

  if (isLoggedIn) {
    return <Layout />;
  } else {
    if (isSigningUp) {
      return <Signup callback={callback2} />;
    } else {
      return <Login callback={callback} onSignupClick={handleSignupClick} />;
    }
  }
};
export default App;