import {React,useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
const SignUp=()=>{
    const [name,setname]=useState([]);
    const [email,setEmail]=useState([]);
    const [password,setPassword]=useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth)
        {
            navigate('/');
        }
    })

    const collectdata=async (e)=>{
        // e.preventDefault();
        //using fetch api
        let result=await fetch('http://localhost:4001/sign',{
            method:'POST',
            body: JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':'application/json'
            },
        });
         result= await result.json()
        // console.log(result);
      navigate('/');
      localStorage.setItem("user",JSON.stringify(result))
    }
    return (
        <div className="main-frame">        
        <h1><u>registration</u></h1>
        <div className="form">
            <label>Name:</label>
            <input type='text' value={name} onChange={(e)=>{setname(e.target.value)}}></input>
            <label>Email:</label>
            <input type='text' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
            <label>Password:</label>
            <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
            <button type="submit" onClick={collectdata}>Signup</button>
        </div>
        </div>
    )
}
export default SignUp;