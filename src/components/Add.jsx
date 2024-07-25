import axios from 'axios'
import React, { useState } from 'react'

const Add = () => {
    const[data,changedata] = useState(
        {
            "Message": "",
            "userId": sessionStorage.getItem("userId")
        }
    )
    const inputHandler=(event)=>{
        changedata({...data,[event.target.name]:event.target.value},[])
    }
    const readvalue=()=>{
        console.log(data)
        axios.post("http://localhost:8081",data,{
            headers:{"token":sessionStorage.getItem("token"),"Content-Type":"application/json"}
        }).then(
            (Response)=>{
                console.log(Response.data)
                if (Response.data.status=="success") {
                    alert("successfully added")
                } else {
                    alert("error")
                }
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Post a message</label>
                                <textarea id="" className="form-control" name="message" value={data.Message} onChange={inputHandler} />
                            </div>
                        </div>
                        <button className="btn btn-success" onClick={readvalue}Post></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add