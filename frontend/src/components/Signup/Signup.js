import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Signup.css"



const Signup = () => {

  const [signupdata,setSignupdata] = useState ([{  //array of an object
    MailId: "",
  Password: "",
  ConfirmPassword:"",
  
  }])
  const {MailId, password, ConfirmPassword} = signupdata; //destructuring is impt
  const signupHandler = (e) => {
    setSignupdata({ ...signupdata, [e.target.name]: [e.target.value] });
  
  }
      return (
      <div className='signup-container'>
        <div className='signup-div'>
          <h3 className='signup-logo'>Logo</h3>
          <div className="signup-p" >
            <p>Create New Account</p>
          </div>
          <div className='signup-body' >
            <input type="text" placeholder='Mail Id' className='mailId' name='mailId' value={MailId} onChange={signupHandler} /> <br />
            <input type="text" placeholder='Password' className='password' name="password" value={password} onChange={signupHandler} /> <br />
            <input type="text" placeholder='Confirm Password' className='ConfirmPassword' name="ConfirmPassword" value={ConfirmPassword} onChange={signupHandler} /> <br />

          </div>
          <div><button className='signup-bt' >Sign Up</button> </div>
          <div >
            
          </div>

          </div>
          
          
        {/* <footer>
          <Link to={"./Signin"}>Sign in</Link>
        </footer> */}
        <div className='signup-link'><Link to={"/"}> Sign in</Link> </div>

        </div>

        )
}

        export default Signup