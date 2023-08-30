import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
        <Link to="/submit" className="submit-btn">SUBMIT RESOURCE</Link>
        <Link to="/upgrade" id="upgrade-btn">UPGRADE</Link>
    </nav>
  )
}
