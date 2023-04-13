import React from 'react';
import {Link, useNavigate} from 'react-router-dom'
import Logo from '../images/logo2.png'
import {useState, useContext} from 'react'
import axios from 'axios'
import { AuthContext } from '../context/authContext';

const Login = () => {
    const [inputs, setInputs] = useState({
        username:"",
        password:"",
    })

    const [err, setError] = useState(null);

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);


    const handleChange = e =>{
        setInputs(prev=> ({...prev, [e.target.name]: e.target.value}))
    };

    const handleSubmit = async e =>{
        e.preventDefault()
        try{
            await login(inputs)
            // await axios.post("/auth/login", inputs)
            //need to change
            navigate("/");
        } catch(err) {
            setError(err.response.data);
        }
    };

    const dhandleSubmit = async e =>{
        e.preventDefault()
        try{
            await login(inputs)
            //need to change
            navigate("/");
        } catch(err) {
            setError(err.response.data);
        }
    };

    return (
        <div className='auth'>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <div className='login'>
                <div className='restaurant'>
                    <h1>Restaurant Login</h1>
                    <form>
                        <input required type="text" placeholder='username' name='username' onChange={handleChange}/>
                        <input required type="password" placeholder='password' name='password' onChange={handleChange}/>
                        <button onClick={handleSubmit}>Login</button>
                        {err && <p>{err}</p>}
                        <span>Don't have an account? <Link to="/register"> Register</Link>
                        </span>
                    </form>
                </div>
                <div className='driver'>
                    <h1>Driver Login</h1>
                    <form>
                        <input required type="text" placeholder='username' name='username' onChange={handleChange}/>
                        <input required type="password" placeholder='password' name='password' onChange={handleChange}/>
                        <button onClick={dhandleSubmit}>Login</button>
                        {err && <p>{err}</p>}
                        <span>Don't have an account? <Link to="/register"> Register</Link>
                        </span>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Login