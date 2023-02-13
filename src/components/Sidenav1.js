import React from 'react'
import Link from 'next/link'
import { Router, useRouter } from 'next/router'

const Sidenav1 = () => {
    const router = useRouter();

    const sendString = (value) => {
        router.push(`/Sidenav2?category=${value}`)
    }

    return (
    <>
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="sidebarNav1" aria-labelledby="sidebarNav1Label">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title text-secondary animate-charcter" id="offcanvasExampleLabel"> <i className="bi bi-c-circle"></i> Aditya</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" data-bs-target="#sidebarNav1" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul style={{listStyle : "none"}}>
                    <li>
                        <Link className="btn sidebarNavButtonPhone aboutNav directPage" data-bs-dismiss="offcanvas" data-bs-target="#sidebarNav1" href="/">
                            Introduction
                        </Link>
                    </li>
                    <li>
                        <Link className="btn sidebarNavButtonPhone aboutNav directPage" href="" data-bs-toggle="offcanvas" data-bs-target="#sidebarNavExperience" role="button" aria-controls="offcanvasExample">
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link className="btn sidebarNavButtonPhone aboutNav directPage" data-bs-dismiss="offcanvas" data-bs-target="#sidebarNav1" href="/education">
                            Education
                        </Link>
                    </li>
                    <li>
                        <Link className="btn sidebarNavButtonPhone aboutNav" href="/hobbies" data-bs-dismiss="offcanvas" data-bs-target="#sidebarNav1" role="button" aria-controls="offcanvasExample">
                            Hobbies
                        </Link>
                    </li>
                </ul>

                <ul style={{listStyle:'none'}} className="mt-4">
                    <li className="text-secondary">
                        Quick Links
                    </li>
                    <li>
                        <a className="btn sidebarNavButtonPhone aboutNav" href="/Resume_Aditya_Patel.pdf" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-file-earmark-pdf-fill"></i> <span className="ms-1">Resume</span>
                        </a>
                    </li>
                    <li>
                        <a className="btn sidebarNavButtonPhone aboutNav" href="mailto:adityakdpatel@gmail.com">
                            <i className="bi bi-envelope aboutIcon"></i> <span className="ms-1">Email-Me</span>
                        </a>
                    </li>
                </ul>

                <ul style={{listStyle:'none'}} className="mt-4">
                    <li className="text-secondary">
                        Social Media
                    </li>
                    <li>
                        <a className="btn sidebarNavButtonPhone aboutNav" href="https://www.linkedin.com/in/thisisadityapatel/" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-linkedin socialMediaIcon"></i> <span className="ms-1">LinkedIn</span>
                        </a>
                    </li>
                    <li>
                        <a className="btn sidebarNavButtonPhone aboutNav" href="https://www.instagram.com/thisisadityapatel/" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-instagram socialMediaIcon"></i> <span className="ms-1">Instagram</span>
                        </a>
                    </li>
                    <li>
                        <a className="btn sidebarNavButtonPhone aboutNav" href="https://github.com/thisisadityapatel" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-github socialMediaIcon"></i> <span className="ms-1">GitHub</span>
                        </a>
                    </li>
                    <li>
                        <a className="btn sidebarNavButtonPhone aboutNav" href="" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-discord socialMediaIcon"></i> <span className="ms-1">Discord</span>
                        </a>
                    </li>
                </ul>

                <ul style={{listStyle:'none'}} className="mt-4">
                    <li className="text-secondary">
                        Toronto Weather
                    </li>
                    <li style={{marginLeft: '12px'}}>
                        <i className="bi bi-thermometer-sun"></i> : <span className="tempInputSpan"></span> C
                    </li>
                    <li style={{marginLeft: '12px'}}>
                        <i className="bi bi-snow"></i> : <span className="snowInputSpan"></span> %
                    </li>
                    <li style={{marginLeft: '12px'}}>
                        <i className="bi bi-cloud-rain-fill"></i> : <span className="rainInputSpan"></span> %
                    </li>
                </ul>

                <div style={{position: 'absolute', bottom: '0'}} className="d-none">
                    <button className="btn text-center" id="darklightbutton">Dark Mode</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sidenav1
