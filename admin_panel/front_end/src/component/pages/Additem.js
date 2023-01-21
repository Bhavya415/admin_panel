import {React,useState} from "react";
import { useNavigate } from "react-router-dom";
const Additem=()=>{
    const sendData= async ()=>{

         //using fetch api
         let result=await fetch('http://localhost:4001/add',{
            method:'POST',
            body: JSON.stringify({name,cost,quant,seller}),
            headers:{
                'Content-Type':'application/json'
            },
           
        });
        console.log(result);
        navigate('/list');

        // console.log(name)
        // console.log(cost)
        // console.log(quant)
        // console.log(seller)

    }
    const [name,setName]=useState([]);
    const [cost,setCost]=useState([]);
    const [quant,setQuant]=useState([]);
    const [seller,setSeller]=useState([]);
    const navigate=useNavigate();
    return(
        <>
        <div className="main-page">
        <h1>Add item</h1>

        <div className="add-item-form">
            <label >Name:</label>
            <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
            <br></br>
            <label >cost:</label>
            <input type='text' value={cost} onChange={(e)=>{setCost(e.target.value)}}></input>
            <br></br>
            <label >quantity:</label>
            <input type='text' value={quant} onChange={(e)=>{setQuant(e.target.value)}}></input>
            <br></br>
            <label >Seller:</label>
            <input type='text' value={seller} onChange={(e)=>{setSeller(e.target.value)}}></input>
            <button type = "Submit" onClick={sendData}> Click Me</button>
        </div>
        </div>
        </>
    )
}
export default Additem