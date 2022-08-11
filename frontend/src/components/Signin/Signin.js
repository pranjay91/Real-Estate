import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Signin.css"

const Signin = () => {
  const [userData, setUserdata] = useState([{  //array of an object
    userId: "",
    password: "",

  }])
  const { userId, password } = userData; //destructuring is impt
  const handler = (e) => {
    setUserdata({ ...userData, [e.target.name]: [e.target.value] });

  }
  const Navigate=useNavigate();
  const gotosignup=()=>{
    Navigate("/Signup")

  }
  // const gotopropertylisting=useNavigate();
  // Navigate("./Property")
  return (
    <div className='signin-container'>

      {/* <Link to="/">Signin</Link> */}
      <div className='signin-logo'>
        <h3 className='logo'>Logo</h3>
        <div className="p" >
          <p>Enter your credentials to access your account</p>
        </div>
        <div className='signin-body' >
          <input type="text" placeholder='User Id' className='userId' name='userId' value={userId} onChange={handler} /> <br />
          <input type="text" placeholder='Password' className='password' name="password" value={password} onChange={handler} /> <br />

        </div>
        
        {/* <div><button className='signin-b' onClick={gotopropertylisting} >Sign In</button> </div> */}
        <div><button className='Signin-b' >Sign In</button> </div>
        <div >
          <button className='Signup-b' onClick={gotosignup}>Sign Up</button>
        </div>
        
      </div>
      <div className='link'>
    <footer>
      <p className='dont'>Don't have an account? <Link to={"/Signup"} className="dont-account">Sign up</Link></p>
      </footer>
      </div>
      
      </div>
    
  )
}

export default Signin