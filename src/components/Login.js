import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ash from '../assets/ash-now.gif';
import '../styles/Login.css'
import fondo from '../assets/pokebola.png'
const Login = () => {

    const [userName, setUserName] = useState("");
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const submit = e => {
        e.preventDefault();
        dispatch({ 
            type: "GET_USERNAME",
            payload: userName  
        });
        setUserName("");
        navigate("/pokedex")

    }

    return (
        <div className="welcome">
            <img className="img-welcomeLogin"src={fondo} alt="" />
            <h1>Hello trainer!</h1>
            <img src={ash} alt="" />
            <h3>Enter your name to start</h3>
            <form action="" onSubmit={submit} className="welcome-form">
                <input 
                    type="text" 
                    value={userName} 
                    onChange={e => setUserName(e.target.value)}
                    required
                />
                <button><i className="fa-brands fa-telegram fa-3x "></i></button>
            </form>
        </div>
    );
};

export default Login;