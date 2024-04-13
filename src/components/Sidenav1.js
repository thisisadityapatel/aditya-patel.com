import React from 'react'
import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const Sidenav1 = () => {
    const router = useRouter();

    const sendString = (value) => {
        router.push(`/Sidenav2?category=${value}`)
    }

    const [wtemp, setWtemp] = useState();
    const [wsnow, setWsnow] = useState();
    const [wrain, setWrain] = useState();
    const [wtime, setWtime] = useState();

    function formatDate(date) {
        const options = {
          hour: 'numeric',
          minute: 'numeric',
          day: 'numeric',
          month: 'long'
        };
        const dayAndMonth = date.toLocaleDateString('en-US', options);
        const day = dayAndMonth.split(' ')[0];
        const formattedDate = `${day} ${dayAndMonth.slice(day.length)}`;
        return formattedDate;
    }

    useEffect(() => {
        fetch('https://api.open-meteo.com/v1/forecast?latitude=43.66&longitude=-79.38&hourly=temperature_2m,rain,snowfall,windspeed_10m')
        .then((res) => res.json())
        .then((data) => {
            setWrain(data['hourly']['rain'][0]);
            setWsnow(data['hourly']['snowfall'][0]);
            setWtemp(data['hourly']['temperature_2m'][0]);
        })
        .catch((err) => {
            console.log(err.messsage);
        });
    }, []);

    useEffect(() => {
        fetch('https://worldtimeapi.org/api/timezone/America/Toronto')
        .then((res) => res.json())
        .then((data) => {
            var thisdate = new Date(data['datetime']);
            setWtime(formatDate(thisdate));
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);


    return (
    <>
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="sidebarNav1" aria-labelledby="sidebarNav1Label">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title text-secondary" id="offcanvasExampleLabel">aditya-patel.com</h5>
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
                        <Link className="btn sidebarNavButtonPhone aboutNav directPage" href="" data-bs-toggle="offcanvas" data-bs-target="#sidebarNav2" role="button" aria-controls="offcanvasExample">
                            Work Experience
                        </Link>
                    </li>
                    <li>
                        <Link className="btn sidebarNavButtonPhone aboutNav" href="/misc" data-bs-dismiss="offcanvas" data-bs-target="#sidebarNav1" role="button" aria-controls="offcanvasExample">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link className="btn sidebarNavButtonPhone aboutNav directPage" data-bs-dismiss="offcanvas" data-bs-target="#sidebarNav1" href="/education">
                            Education
                        </Link>
                    </li>
                </ul>

                <ul style={{listStyle:'none'}} className="mt-4">
                    <li className="text-secondary">
                        Quick Access
                    </li>
                    <li>
                        <a className="btn sidebarNavButtonPhone aboutNav" href="/Resume_Aditya_Patel.pdf" target='_blank'>
                            <i className="bi bi-file-earmark-pdf-fill"></i> <span className="ms-1">Resume</span>
                        </a>
                    </li>
                    <li>
                        <a className="btn sidebarNavButtonPhone aboutNav" href="mailto:aditya.patel@torontomu.ca">
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
                        <a className="btn sidebarNavButtonPhone aboutNav" href="https://github.com/thisisadityapatel" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-github socialMediaIcon"></i> <span className="ms-1">GitHub</span>
                        </a>
                    </li>
                </ul>

                <ul style={{listStyle:'none'}} className="mt-4">
                    <li className="text-secondary">
                        Toronto Weather 
                    </li>
                    <li style={{marginLeft: '12px'}}>
                        <i className="bi bi-clock"></i> : {wtime}
                    </li>
                    <li style={{marginLeft: '12px'}}>
                        <i className="bi bi-thermometer-sun"></i> : {wtemp} °C
                    </li>
                    <li style={{marginLeft: '12px'}}>
                        <i className="bi bi-snow"></i> : {wsnow} cm
                    </li>
                    <li style={{marginLeft: '12px'}}>
                        <i className="bi bi-cloud-rain-fill"></i> : {wrain} mm
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Sidenav1
