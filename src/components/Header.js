import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top navbar-inner">
            <div className="container-fluid">
                <button className="btn animate-charcter" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarNav1" aria-controls="sidebarNav1">
                    <i className="bi bi-justify h5"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="ms-auto navbar-nav navbarItems">
                        <li className="nav-item">
                            <Link className="nav-link hover-underline-animation active" aria-current="page" href="/">Introduction</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link hover-underline-animation active" href="/Resume_Aditya_Patel.pdf" target='_blank'>Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link hover-underline-animation active" href="mailto:adityakdpatel@gmail.com?subject">Email-Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header
