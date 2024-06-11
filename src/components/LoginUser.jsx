import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const LoginUser = () => {
    const [data,changeData]=useState([
        {
            "username" :"",
            "password" :""
        }
    ])
    const inputHandler=(event)=>{
        changeData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        axios.post("",data).then(
            (response)=>{
        console.log(Response.data)
        if(Response.data.status=="success")
            {
                alert("success")
            }
            else{
                alert("error")
            }
            }).catch().finally()
    }
    return (
    <div>
        <div className="container">
            <Navbar/>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">User Name</label>
                            <input type="text" className="form-control" name='username' value={data.username} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="text" className="form-control" name='password' value={data.password} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>Login</button>
                        </div>
                        <a class="navbar-brand" href="/">New user click here</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default LoginUser