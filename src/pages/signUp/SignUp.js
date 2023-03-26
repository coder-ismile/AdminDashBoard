import React,{useState} from 'react'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import"./SignUp.scss"
const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleSingUp = async(e)=>{
       e.preventDefault();
  
       try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential.user;

        navigate('/login')
        
       } catch (error) {
          console.log(error);
       }

    }
  return (
    <div className='signUp'>
        <div className="signUpForm">
            <form onSubmit={handleSingUp}>
                <h1>SingUp</h1>
            <input type="email" placeholder='email' onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder='password' onChange={e => setPassword(e.target.value)} />
            <button type='submit'>Login</button>
        </form>
        <p>Already Create Account? <Link to="/login">Login</Link></p>
        </div>
    </div>
  )
}

export default SignUp
