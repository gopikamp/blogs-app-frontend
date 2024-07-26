import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const Logout = () => {
        sessionStorage.clear()
        navigate("/")
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="#">BLOGS</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/add">AddPost</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Viewall">View</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Mypost" >MYPOST</Link>
                            </li>
                            <li class="nav-item">
                                <button className="btn btn-success" onClick={Logout}>Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar