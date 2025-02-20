import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";

const Header = () => {
    const router = useRouter();
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
                            {(router.pathname !== '/') && 
                            (<li className="nav-item">
                                <Link className="nav-link hover-underline-animation active" aria-current="page" href="/">Home</Link>
                            </li>)}
                            <li className="nav-item">
                                <Link className="nav-link hover-underline-animation active" aria-current="page" href="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link hover-underline-animation active" aria-current="page" href="/misc">Projects</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
