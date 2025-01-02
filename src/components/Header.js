import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light navbar-inner transparent" style={{ opacity: "0.85 !important" }}>
                <div className="container-fluid">
                    <button
                        className="btn shadow-none hover-color"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#sidebarNav1"
                        aria-controls="sidebarNav1">
                        <i className="bi bi-layout-sidebar-inset fs-4" style={{ color: '#484d52' }}></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="ms-auto navbar-nav navbarItems">
                            <li className="nav-item">
                                <Link className="nav-link hover-underline-animation active" aria-current="page" href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link hover-underline-animation active" aria-current="page" href="/misc">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link hover-underline-animation active" href="mailto:aditya.patel@torontomu.ca">Email-Me</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
