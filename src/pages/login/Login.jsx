import React, { useContext, useState } from 'react'
import {  signInWithEmailAndPassword } from "firebase/auth";
import "./login.scss"
import { auth } from '../../firebase';
import { useNavigate,Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const [error, setError] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()
 const{ dispatch }=useContext(AuthContext)

  const handleLogin = async(e)=>{
     e.preventDefault();

     try {
      const userCredential=  await signInWithEmailAndPassword(auth,email,password)
      const user = userCredential.user;
      dispatch({type:"LOGIN", payload:user})
      navigate("/")
     } catch (error) {
      setError(true)
     }

  }
  return (
    <div className='login'>
      <div className="loginForm">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <input type="email" placeholder='email' onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder='password' onChange={e => setPassword(e.target.value)} />
        <button type='submit'>Login</button>
       {error && <span>Wrong email or password!</span>}
      </form>
      <p>New User ? <Link to="/signup">SignUp</Link></p>
      </div>
    </div>
  )
}

export default Login
