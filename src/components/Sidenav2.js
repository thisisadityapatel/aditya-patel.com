import React from 'react'
import Link from 'next/link'
import { useEffect } from 'react'
import { experiences } from '_data/experiences'

const Sidenav2 = () => {
    useEffect(() => {
        fetch('https://api.github.com/users/thisisadityapatel/repos')
            .then((res) => res.json())
            .then((data) => {
                setProjects(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="sidebarNav2" aria-labelledby="sidebarNav2Labels">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title text-secondary" id="offcanvasExampleLabel">Work</h5>
                <button type="button" className="btn navExperienceBackBtn" data-bs-toggle="offcanvas" data-bs-target="#sidebarNav1"><i className="bi bi-arrow-left animate-charcter" style={{ fontSize: '1.5rem' }}></i></button>
            </div>
            <div className="offcanvas-body sidebarDivs">
                <ul style={{ listStyle: 'none' }} className="mt-1">
                    <h5 className="text-secondary mb-3">Professional Experience</h5>
                    <ul style={{ listStyle: 'none', paddingLeft: '0rem' }}>
                        {experiences.map((exp) => {
                            return (
                                <li>
                                    <Link href={"/experience/" + exp.work_id} className="btn experienceButton aboutNav" data-bs-dismiss='offcanvas' data-bs-target='#sidebarNavExperience'>
                                        {exp.company}<span style={{ fontStyle: "italic", color: "grey", fontSize: "15px" }}>- {exp.short_position}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </ul>
            </div>
        </div>
    )
}

export default Sidenav2
