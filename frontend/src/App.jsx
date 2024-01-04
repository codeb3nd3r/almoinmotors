import axios from "axios";
import { useState, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import Login from "./pages/Login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [Email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const callback =(data)=> {
    if(data){
    const {email,password}=data;
    setEmail(email)
    setPassword(password)
    }
  };
  useEffect(() => {
    const validation = async () => {
      try {
        const response = await axios.get("http://localhost:5000/almoin/logindata");
        let emailFound = response.data.some(e => Email === e.email);
        setIsLoggedIn(emailFound);
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
  
  

  return (
    <div>{isLoggedIn ? <Layout /> : <Login onLoginData={callback} />}</div>
  );
};
export default App;