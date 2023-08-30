import React from 'react'
import logo from "../logo.png"
import { Link } from 'react-router-dom'

export default function SubmitPage() {
  return (
    <main className='main-submit'>
        <div className="container">
            <div className="top-container">
                <Link to="/">
                    <img src={logo} alt="undesign" />
                    <h2 className="link-title">Undesign</h2>
                </Link>
            </div>
            <div className="bottom-container">
                <h1 className="container-title">Add a new resource</h1>
                <p className="container-text">Submit your free resource. It will go through a review process before being published.</p>
                <form action="index.html" autoComplete="off">
                    <label>Url of the resource <br />
                        <input type="text" placeholder="https://www.abc.com" required />
                    </label>
                    <label>Email (to recieve notification)<br />
                        <input type="email" placeholder="xyz@gmail.com" required />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    </main>
  )
}
