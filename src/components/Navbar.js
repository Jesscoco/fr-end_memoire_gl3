import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar bg-light shadow fixed-top">
    <div className="container-fluid">
        <a className="navbar-brand" href>
            <img src="./img/logo_ifri.jpg" alt="Logo IFRI" width="70" height="50" className="d-inline-block align-text-top"/>
        </a>
        <ul>
          <Link to="/" class="btn shadow-none" style= {{color:'#0074fe', fontWeight:'bolder'}}>Accueil</Link>
        </ul>
    </div>
    </nav>
    
  )
}
