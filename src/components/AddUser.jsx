import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const AddUser = () => {
    const [data,changeData] = useState([
        {
            
                "name":"",
                "dob":"",
                "bloodgrp":"",
                "mobile":"",
                "address":"",
                "pincode":"",
                "district":"",
                "place":"",
                "email":"",
                "username":"",
                "password":"",
                "confirmpassword":""
            
        }
    ])
    const inputHandler=(event)=>{
        changeData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8084/add",data).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success")
                    {
                        alert("success")
                    }
                    else{
                        alert("error")
                    }
            }
        ).catch(
            (error)=>{
                console.log(error.message)
        }
    ).finally()
    }
  return (
    <div>
        <div className="container">
            <Navbar/>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">DOB</label>
                        <input type="date" className="form-control" name="dob" value={data.dob} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Blood group</label>
                        <select name="bloodgrp" id="" className="form-control" value={data.bloodgrp} onChange={inputHandler}>
                            <option value=""></option>
                            <option value="O+ve">O+ve</option>
                            <option value="O-ve">O-ve</option>
                            <option value="A+ve">A+ve</option>
                            <option value="A-ve">A-ve</option>
                            <option value="B+ve">B+ve</option>
                            <option value="B-ve">B-ve</option>
                            <option value="AB+ve">AB+ve</option>
                            <option value="AB-ve">AB-ve</option>
                        </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Mobile No</label>
                        <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Address</label>
                        <textarea name="address" id="" className="form-control" value={data.address} onChange={inputHandler}></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Pincode</label>
                        <input type="text" className="form-control" name='pincode' value={data.pincode} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">District</label>
                        <select name="district" id="" className="form-control" value={data.district} onChange={inputHandler}>
                            <option value=""></option>
                            <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                            <option value="Kollam">Kollam</option>
                            <option value="Pathanamthitta">Pathanamthitta</option>
                            <option value="Alappuzha">Alappuzha</option>
                            <option value="Thrissur">Thrissur</option>
                            <option value="Ernakulam">Ernakulam</option>
                            <option value="Kottayam">Kottayam</option>
                            <option value="Idukki">Idukki</option>
                            <option value="Wayanad">Wayanad</option>
                            <option value="Kannur">Kannur</option>
                            <option value="Kasargod">Kasargod</option>
                            <option value="Palakkad">PAlakkad</option>
                            <option value="Malappuram">Malappuram</option>
                            <option value="Kozhikode">Kozhikode</option>
                        </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Place</label>
                        <input type="text" className="form-control" name='place' value={data.place} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Email-Id</label>
                        <input type="email" className="form-control" name='email' value={data.email} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">User name</label>
                        <input type="text" className="form-control" name='username' value={data.username} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Password</label>
                        <input type="password" name="" id="" className="form-control" value={data.password} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Confirm Password</label>
                        <input type="password" name="" id="" className="form-control" value={data.confirmpassword} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Sign Up</button>
                        </div>
                        <a class="navbar-brand" href="/login">Back to login page</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddUser