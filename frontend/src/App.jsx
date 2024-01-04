import axios from "axios";
import { useState, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import Login from "./pages/Login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const callback =(data)=> {
    if(data){
    const {email,password}=data;
    setEmail(email)
    setPassword(password)
    }
  };
  console.log(email,password);
  useEffect(() => {
    const validation = async () => {
      try {
        await axios.get("http://localhost:5000/almoin/logindata")
        .then((data)=>{
          (data.data.map((e)=>{
            console.log(e.email)
          }));
        })
      } catch (error) {
        console.log(error);
      }
    };
    validation();
  }, []);

  return (
    <div>{isLoggedIn ? <Layout /> : <Login onLoginData={callback} />}</div>
  );
};
export default App;