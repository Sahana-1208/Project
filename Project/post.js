import React, {useState} from 'react';
import axios from'axios'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../src/styles/post.css'

function RegistrationForm() 
{
  const [id,setId]=useState("");
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
    async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post('http://localhost:8080/cart',
        {
          id:id,
              productName:productName,
              quantity:quantity,
              size:size,
              color:color
        });
          alert("Details of the Cart are added!!");
          setId("");
        setProductName("");
        setQuantity("");
        setSize("");
        setColor("");
        }
    catch(err)
        {
          alert("Failed:(");
        }
   }

    return(
        <>
        <div className="form">
            <h2 style={{textAlign:"center",
                        color:"#f41149"}}>
                E-Cart
            </h2>
            <br></br>
            <Box component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '30ch' },
                    }}
             noValidate
             autoComplete="on"
            >
            <div>
                <TextField
                    required
                    id="id"
                    label="Id"
                    placeholder='Enter id'
                    value={id}
                    onChange={(event) =>
                                    {
                                        setId(event.target.value);      
                                    }}
                />
                <br></br>
                <TextField
                    required
                    id="productName"
                    label="productName"
                    placeholder='Enter the product name'
                    value={productName}
                    onChange={(event) =>
                                    {
                                        setProductName(event.target.value);      
                                    }}
                />
                <br></br>
                <TextField
                    id="quantity"
                    label="Quantity"
                    placeholder='Enter Quantity'
                    value={quantity}
                    onChange={(event) =>
                                    {
                                        setQuantity(event.target.value);      
                                    }}
                />
                <br></br>
                <TextField
                    required
                    id="Size"
                    label="Size"
                    placeholder='Size'
                    value={size}
                    onChange={(event) =>
                                    {
                                        setSize(event.target.value);      
                                    }}
                />
                <br></br>
                <TextField
                    required
                    id="Color"
                    label="Color"
                    placeholder='Enter the color'
                    value={color}
                    onChange={(event) =>
                                    {
                                        setColor(event.target.value);      
                                    }}
                />
                
              <br></br>
              <div className='footer'>
              <b>
                  <button onClick ={save}>SUBMIT</button>
              </b>
              </div>
            </div>
            </Box>
        </div>
        </>
    )       
}
export default RegistrationForm