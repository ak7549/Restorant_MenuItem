import React from 'react'
import "../style/Login.css"

function Login() {
  return (
    <div className="loginSection">
    <div className='loginMain'>
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Log-in</title>
  <link rel="stylesheet" href="style/login.css" />
  <div className="box">
    <span className="borderLine" />
    <form>
      <h2>Sign in</h2>
      <div className="inputBox">
        <input type="text" required="" />
        <span>Username</span>
        <i />
      </div>
      <div className="inputBox">
        <input type="password" required="" />
        <span>Password</span>
        <i />
      </div>
      <div className="links">
        <a href="#">Forgot Password</a>
        <a href="#">Sign Up</a>
      </div>
      <input type="submit" defaultValue="Login" />
    </form>
  </div>
</>

    </div>
    </div>
  )
}

export default Login
