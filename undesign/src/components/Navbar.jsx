import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className='nav-buttons'>
        <Link to="/submit" className="submit-btn" title='Submit Resource'>SUBMIT RESOURCE</Link>
        <Link to="/upgrade" id="upgrade-btn" title='Upgrade'>UPGRADE</Link>
    </nav>
  )
}
