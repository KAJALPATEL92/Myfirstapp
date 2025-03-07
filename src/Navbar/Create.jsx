import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
    const [inputData, setInputData] = useState({
        username: '',
        email: ''
    })
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3000/users", inputData)
        .then(res => {
            alert('Data inserted Successfully')
            navigate('/')
        })
    }
    return (
        <div className="container mt-5">
            <h2>Create User</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" placeholder="Enter username" 
                    name="username" onChange={e => setInputData({...inputData, username: e.target.value})} />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" 
                    name="email" onChange={e => setInputData({...inputData, email: e.target.value})} />
                </div>

                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
        </div>
    );
}

export default Create;
