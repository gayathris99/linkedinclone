import React, { useState } from 'react'
import './Login.css'
import {firebaseAuth} from './firebase'
import { useDispatch } from 'react-redux';
import {login} from './features/userSlice'

function Login() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const dispatch = useDispatch()

    const register = () => {
       if(!name) {
           return alert("Please enter your name")
       }
       firebaseAuth.createUserWithEmailAndPassword(email, password)
       .then((userAuth) => {
           userAuth.user.updateProfile({
               displayName: name
           })
           .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name
                }))
           })
       })
       .catch(error => alert(error.message))

    };

    const loginToApp = (e) => {
        e.preventDefault()
        firebaseAuth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName
            }
            ))
        })
        .catch(error => alert(error.message))
    }
    return (
        <div className='login'>
            <img src="./linkedin.png" alt=""/>
            <form>
                <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>
        <p>Not a member?{" "}
            <span className='login__register' onClick={register}>Register Now</span>
        </p>
        </div>
    )
}

export default Login