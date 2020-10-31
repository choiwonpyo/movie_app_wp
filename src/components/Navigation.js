import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'
function Navigation() {
    return (
        <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
        </div>
    )
}

export default Navigation