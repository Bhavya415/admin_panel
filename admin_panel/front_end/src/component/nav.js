import React from "react";
import {Link,useNavigate} from "react-router-dom";
function Nav(){
    const auth=localStorage.getItem('user');
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigate('/signup')
    }
    return (
                
      <>
            <ul className="navBar">  
             <li><Link to="/">Home</Link></li> 
                <li><Link to="/list">List</Link></li>
                <li><Link to ="/add">Add Item</Link></li>   
                <li><Link to ="/Contact">Contact</Link></li>
                <li><Link to ="/Sign">Sign</Link></li>
                <li>{auth?<Link onClick={logout} to ="/sign">Logout</Link>:<Link to = "/login">Login</Link>}</li>
            </ul>

     
        </>

    )
}

export default Nav;
