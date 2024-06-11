import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    const [data,changeData]=useState([])
    const fetchData=()=>{
        axios.get("http://localhost:8084/view").then(
            (response)=>{
                console.log(response.data)
                changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <div className="container">
                <Navbar/>
                <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Index</th>
                                <th scope="col">Name</th>
                                <th scope="col">DOB</th>
                                <th scope="col">Blood group</th>
                                <th scope="col">Mobile No</th>
                                <th scope="col">Address</th>
                                <th scope="col">Pincode</th>
                                <th scope="col">District</th>
                                <th scope="col">Place</th>
                                <th scope="col">Emil-Id</th>
                                <th scope="col">User name</th>
                                <th scope="col">Password</th>
                                <th scope="col">Confirm Password</th>

                            </tr>
                        </thead>
                        <tbody>
                            {data.map(
                                (value,index)=>{
                                    return <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{value.name}</td>
                                    <td>{value.dob}</td>
                                    <td>{value.bloodgrp}</td>
                                    <td>{value.mobile}</td>
                                    <td>{value.address}</td>
                                    <td>{value.pincode}</td>
                                    <td>{value.district}</td>
                                    <td>{value.place}</td>
                                    <td>{value.email}</td>
                                    <td>{value.username}</td>
                                    <td>{value.passsword}</td>
                                    <td>{value.confirmpassword}</td>
                                </tr>
                                }
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ViewAll