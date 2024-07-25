import axios from 'axios'
import React, { useState } from 'react'

const Add = () => {
    const[data,changedata] = useState(
        {"Message":"","userId":sessionStorage.getItem("userId")}
    )
    const inputHandler=(event)=>{
        changedata({...data,[event.target.name]:event.target.value})
    }
    const readvalue = ()=>{
        console.log(data)
        axios.post("http://localhost:8082/add",data,{
           headers:{"token":sessionStorage.getItem("token"),"Content-Type":"application/json"}
        }).then(
            (response)=>{
                console.log(data)
                if (response.data.status=="success") {
                    alert("successfully posted")
                } else {
                    alert("Error")
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
                                <textarea id="" className="form-control" name="Message" value={data.Message} onChange={inputHandler} />
                            </div>
                        </div><br></br>
                        <button className="btn btn-success" onClick={readvalue}>Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add