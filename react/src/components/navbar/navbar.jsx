import React from 'react'

const navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark py-4">
                <div className="container-fluid">
                    <a className="navbar-brand text-info heading fs-3" href="#">Moogle</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Blogs</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link disabled text-white-50">Account</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className="btn btn-outline-info mx-4" type="submit">Sign Up</button>
                            <button className="btn btn-outline-info" type="submit">Log In</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default navbar
