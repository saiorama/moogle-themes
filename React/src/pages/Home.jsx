import React from 'react'
import Navbar from '../components/navbar/navbar'
import Posts from '../components/posts/posts'
import Footer from '../components/footer/footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <br />
            <br />
            <br />
            <div className="container text-center w-100  my-5">
            <div class="container headline">
                <h1 className="text-white text-center heading">Read the best blogs about your favorite blogs</h1>
            </div>
            <p className="text-white-50 text-center fs-1">❝Reading is essential for those who seek to rise above the ordinary.❞ </p>
            <p className="text-white-50 text-center">- Jim Rohn</p>
            <a href="" class="btn btn-outline-info text-center my-5 btn-rounded">Sign Up today !</a>
            </div>
            <Posts />
            <Footer />
        </>
    )
}

export default Home
