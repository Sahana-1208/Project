import React from 'react';
import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom';
import Delete from '../delete';
import Get from '../get';
import RegistrationForm from '../post';
import UpdateForm from '../put';


function Dum(){
    return (
        <div className='App'>
                 <Router>
                    <div class='nav'>
                        <center><h1 id='title'>Add Items to Your Cart</h1></center>
                        <div class='nav-link'>
                    <Link to='/'><button><b>HOME</b></button></Link>
                    <Link to='/UpdateForm'><button><b>UPDATE</b></button></Link>
                    <Link to='/GetForm'><button><b>VIEW</b></button></Link>
                    <Link to='/Deleteform'><button><b>DELETE</b></button></Link>
                    </div>
                    </div>
                   
                <Routes>
                
                <Route path='/' element={<RegistrationForm/>}/>
                <Route path='/GetForm' element={<Get/>}/>
                <Route path='/UpdateForm' element={<UpdateForm/>}/>
                <Route path='/Deleteform' element={<Delete/>}/>

                </Routes>
                </Router>

        </div>
    )
}

export default Dum;