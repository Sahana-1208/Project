import {useEffect,useState} from "react"
import "../src/styles/get.css"
import axios from "axios";

export default function Delete(){
    const[cart,setCart] = useState([]);
    const handleDelete = (id) =>{
        axios.delete(`http://localhost:8080/cart/${id}`)
        .then(res=>setCart(res.data))  
    }
    useEffect(()=> {
        fetch("http://localhost:8080/cart")
        .then(res=>res.json())
        .then(res=>setCart(res))
    })
    return(
        <div className="App">
            <table>
            <tr className="main">
                <th>ID</th>
                <th>ProductName</th>
                <th>Quantity</th>
                <th>Size</th>
                <th>Color</th>
            </tr>
            {cart.map(u=>(
                <tr>
                    <th>{u.id}</th>
                    <th>{u.productName}</th>
                    <th>{u.quantity}</th>
                    <th>{u.size}</th>
                    <th>{u.color}</th>
                    <th>
                        <button className="delete" type="button" onClick={()=>handleDelete(u.id)}>Delete</button>
                    </th>
                </tr>
            ))}
            </table>
        </div>
    );
}