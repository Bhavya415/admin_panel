import {React,useState,useEffect} from "react";
import {Link, useNavigate} from 'react-router-dom';


 const List = ()=>{
	const [data,setData]=useState([]);

	// const [id,setId]=useState('');

	const navigate=useNavigate();
		
	useEffect(()=>{
		getProduct();
	},[])

   const getProduct=async()=>{ 
   let result=await fetch('http://localhost:4001/list');
   result=await result.json();
   setData(result);
   
	}
	const deleteItem=async (id)=>{
// console.log(id);
let result=await fetch(`http://localhost:4001/product/${id}`,{
	method:"Delete"
});
result=await result.json();
if(result)
{
	alert("record deleted");
	getProduct();
}

	}

const updateItem=(id)=>{
	navigate(`/update/${id}`);
}
	// console.warn(data)
    return(
      <div className="main-outline">
        <h1><u>List Products</u></h1>
		<div className="tabel">
		<ul>
				<li>serial Number</li>
				<li>Name</li>
				<li>Cost</li>
				<li>Quantity</li>
				<li>Seller</li>
				<li>operation</li>
			</ul>

		{
			data.map((item,index)=>
			<ul>
				<li>{index+1}</li>
				<li>{item.Name}</li>
				<li>{item.Cost}</li>
				<li>{item.Quantity}</li>
				<li>{item.Seller}</li>
				<li>
					<button type="submit" onClick={()=>deleteItem(item._id)}>delete</button>
					
					<button type="submit" onClick={()=>updateItem(item._id)}>update</button>
				</li>
				
				</ul>
			)

}

		</div>

    </div>
);
}

export default List;