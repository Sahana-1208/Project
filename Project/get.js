import {useEffect,useState} from "react"
import "../src/styles/get.css"

export default function Get(){
    const[cart,setCart] = useState([]);
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
                </tr>
            ))}
            </table>
        </div>
    );
}