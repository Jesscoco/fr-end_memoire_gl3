import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar bg-light">
    <div className="container-fluid">
        <a className="navbar-brand" href>
            <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="Logo IFRI" width="30" height="24" className="d-inline-block align-text-top"/>
  
        </a>
        <ul>
          <Link to="/" class="btn btn-light shadow-none">Accueil</Link>
          <button type="button" class="btn btn-light">Others</button>  
        </ul>
        
    </div>

  
    </nav>
    
  )
}
