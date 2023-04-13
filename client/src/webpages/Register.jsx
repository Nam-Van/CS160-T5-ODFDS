import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../images/logo2.png'
import { useState } from 'react'
import  axios  from 'axios'


const Register = () => {
    const [inputs, setInputs] = useState({
        username:"",
        email:"",
        password:"",
        name:"",
        address:""
    })

    const [dinputs, dsetInputs] = useState({
        username:"",
        email:"",
        password:"",
        F_name:"",
        L_name:"",
        drivers_license_number:"",
        license_plate_number:""
    })

    const [err, setError] = useState(null);

    const navigate = useNavigate()

    const handleChange = e =>{
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const dhandleChange = e =>{
        dsetInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }


    const handleSubmit = async e =>{
        e.preventDefault()
        try{
            // await axios.post("/restaurant/signup", inputs); 
            await axios.post("/auth/register", inputs)
            navigate("/login");
        }catch(err){
            setError(err.response.data)
        }
        
    }

    const dhandleSubmit = async e =>{
        e.preventDefault()
        try{
            // await axios.post("/driver/signup", dinputs); 
            await axios.post("/auth/dregister", dinputs)
            navigate("/login");
        }catch(err){
            setError(err.response.data)
        }

    }

    return (
        <div className='auth'>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <div className='login'>
                <div className='restaurant'>
                    <h1>Restaurant Register</h1>
                    <form>
                        <input required type="text" placeholder='email' name='email' onChange={handleChange}/>
                        <input required type="text" placeholder='username' name='username' onChange={handleChange}/>
                        <input required type="password" placeholder='password' name='password' onChange={handleChange}/>
                        <input required type="text" placeholder='name' name='name' onChange={handleChange}/>
                        <input required type="text" placeholder='address' name='address' onChange={handleChange}/>
                        <button onClick={handleSubmit}>Register</button>
                        {err && <p>{err}</p>}
                        <span>Already have an account? <Link to="/login"> Login</Link>
                        </span>
                    </form>
                </div>
                <div className='driver'>
                    <h1>Driver Register</h1>
                    <form>
                        <input required type="text" placeholder='first name' name='F_name' onChange={dhandleChange}/>
                        <input required type="text" placeholder='last name' name='L_name' onChange={dhandleChange}/>
                        <input required type="text" placeholder='email' name='email' onChange={dhandleChange}/>
                        <input required type="text" placeholder='username' name='username' onChange={dhandleChange}/>
                        <input required type="password" placeholder='password' name='password' onChange={dhandleChange}/>
                        <input required type="text" placeholder='driver license #' name='drivers_license_number' onChange={dhandleChange}/>
                        <input required type="text" placeholder='license plate #' name='license_plate_number' onChange={dhandleChange}/>
                        <button onClick={dhandleSubmit}>Register</button>
                        {err && <p>{err}</p>}
                        <span>Already have an account? <Link to="/login"> Login</Link>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register