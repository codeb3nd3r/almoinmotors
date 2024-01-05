import React, { useState } from 'react'
import ContactInformation from "../UI/ContactInformation"
import "../../styles/contactbuyer.css"

const Contactbuyer = () => {
    const [isloggedin,setLoggedin]=useState(false);
    const handlechange=()=>{
        setLoggedin(true)
    }
    const handlechange2=()=>{
        setLoggedin(false)
    }
  return (
    <div className='main-div'>
        <button className="cb1" onClick={handlechange2}>X</button>
        <button className="cb2" onClick={handlechange}>
            {
                isloggedin ? <ContactInformation /> : <>Contact Buyer</>
            }
        </button>
    </div>
  )
}

export default Contactbuyer