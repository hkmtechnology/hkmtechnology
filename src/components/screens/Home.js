import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
    <>
        <div className="posts">
            <div className="card">
                <div className="card-image">
                    <img src="http://127.0.0.1:8080/bl.jpg" alt="insta"/>
                    <span className="card-title">Card Tit+le</span>
                </div>
                <div className="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="card-action">
                    <Link to="">This is a link</Link>
                    <Link to="">This is a link</Link>
                </div>
            </div>
            <div className="card">
                <div className="card-image">
                    <img src="http://127.0.0.1:8080/bl.jpg" alt="insta"/>
                    <span className="card-title">Card Tit+le</span>
                </div>
                <div className="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="card-action">
                    <Link to="">This is a link</Link>
                    <Link to="">This is a link</Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home