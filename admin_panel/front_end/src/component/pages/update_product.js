    import {React,useEffect,useState} from "react";
    // import { useNavigate } from "react-router-dom";
    import {useParams} from "react-router-dom";
    import { useNavigate } from "react-router-dom";
    const UpdateProduct=()=>{
        const [name,setName]=useState([]);
        const [cost,setCost]=useState([]);
        const [quant,setQuant]=useState([]);
        const [seller,setSeller]=useState([]);
        const navigate=useNavigate();
       // const navigate=useNavigate();
        const Params=useParams();

        useEffect(()=>{
            getProductDetails();
        },[])

        const getProductDetails=async()=>{
            //   console.warn(Params.id);
            let result=await fetch(`http://localhost:4001/product/${Params.id}`)
            result=await result.json();
            // console.log(result)
            setName(result.Name);
            setCost(result.Cost);
            setQuant(result.Quantity);
            setSeller(result.Seller);
        }
       
       
        const sendData= async ()=>{
        
                console.warn({name,cost,quant,seller})
              
                let result=await fetch(`http://localhost:4001/product/${Params.id}`,{ 
                    method:'Put',
                    body:JSON.stringify({name,cost,quant,seller}),
                    headers:{
                        'Content-Type':'application/json'
                    }
                   
                });

                result=await result.json();
                navigate('/list');
                console.log(result);
        }

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
    export default UpdateProduct;