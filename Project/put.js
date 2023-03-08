import * as React from 'react';
import { useState} from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';

export default function UpdateForm() {
  const [id,setId]=useState("");
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  async function save(event) {
    event.preventDefault();
    try {
        await axios.put("http://localhost:8080/cart/put",

            { id:id,
              productName:productName,
              quantity:quantity,
              size:size,
              color:color
            });
        alert("Cart updated");
        setId("");
        setProductName("");
        setQuantity("");
        setSize("");
        setColor("");
    }
    catch (err) {
        alert("User Updation Failed");
    }
}
    return (
        <div>
           
           <center ><h2>Update The Details</h2></center> 

        <form>
       <center> 
       <TextField required id="outlined-basic" label="id" variant="outlined"
        onChange={(event)=>setId(event.target.value)}/> 
        <br></br><br></br>
        <TextField required id="outlined-basic" label="ProductName" variant="outlined"
        onChange={(event)=>setProductName(event.target.value)}/> 
        <br></br><br></br>
        <TextField id="outlined-basic" label="Quantity" variant="outlined"
        onChange={(event)=>setQuantity(event.target.value)}/> 
        <br></br><br></br>
        <TextField required id="outlined-basic" label="Size" variant="outlined" 
        onChange={(event)=>setSize(event.target.value)}/>
        <br></br><br></br>
        <TextField required id="outlined-basic" label="Color" variant="outlined" 
        onChange={(event)=>setColor(event.target.value)}/>
        <br></br><br></br>
        </center>
        <div/>
        <center>
               <center> <button type="submit" class="btn btn-primary" onClick={save}>Update</button></center>
                </center>
        <div/>   
            </form>
            

        </div>
    )
    }
