import {React,useState} from "react";
import { useNavigate } from "react-router-dom";
const Login=()=>{
    const [email,setEmail]=useState([]);
    const [password,setPassword]=useState([]);
    const navigate=useNavigate();


    const colelctData=async (e)=>{
        //  e.preventDefault();
        //using fetch api
        let result=await fetch('http://localhost:4001/login',{
            method:'POST',
            body: JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            },
        });
        result= await result.json()
        if(result)
        {
            console.log(`result is ${result}`)
            navigate('/');
            localStorage.setItem("user",JSON.stringify(result))
        }
        else{
            console.log(`result is ${result}`)
            navigate('/sign');
        }
      


    }
    return (
        <div className="main-frame">        
        <h1><u>Login</u></h1>
        <div className="form">
          
            <label>Email:</label>
            <input type='text' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
            <label>Password:</label>
            <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
            <button type="submit" onClick={colelctData}>Login</button>
        </div>
        </div>
    )
}
export default Login;