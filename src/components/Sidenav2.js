import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const Sidenav2 = () => {

    const [projects, setProjects] = useState();

    const router = useRouter();
    const {category} = router.query;

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
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="sidebarNavExperience" aria-labelledby="sidebarNavExperienceLabels">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title text-secondary animate-charcter" id="offcanvasExampleLabel">Work</h5>
                <button type="button" className="btn navExperienceBackBtn" data-bs-toggle="offcanvas" data-bs-target="#sidebarNav1"><i className="bi bi-arrow-left"></i></button>
            </div>
            <div className="offcanvas-body">
                <ul style={{listStyle:'none'}} className="mt-1">
                    <h5 className="text-secondary">Professional Experience</h5>
                    <ul style={{listStyle:'none', paddingLeft: '0rem'}}>
                        <li>
                            <Link  href="/experience/Scotiabank" className="btn experienceButton aboutNav" data-bs-dismiss='offcanvas' data-bs-target='#sidebarNavExperience'>
                                Scotiabank
                            </Link>
                        </li>
                        <li>
                            <Link  href="/experience/Ieee" className="btn experienceButton aboutNav" data-bs-dismiss='offcanvas' data-bs-target='#sidebarNavExperience'>
                                IEEE TMU
                            </Link>
                        </li>
                        <li>
                            <Link  href="/experience/Enactus" className="btn experienceButton aboutNav" data-bs-dismiss='offcanvas' data-bs-target='#sidebarNavExperience'>
                                Enactus TMU
                            </Link>
                        </li>
                    </ul>
                    <h5 className="mt-5 text-secondary">Projects</h5>
                    <ul style={{listStyle:'none', paddingLeft: '0rem'}}>
                        {(projects?.map((proj) => {
                            return (
                                <li key={proj.id}>
                                    <Link href={{
                                        pathname: "/projects/[project]",
                                        query: {
                                            project: proj.id,
                                            name: proj.name,
                                            description: proj?.description,
                                            htmllink: proj.html_url,
                                            technologies: proj.topics,
                                        }
                                    }}  as={`/projects/${proj.id}`} className="btn experienceButton aboutNav" data-bs-dismiss='offcanvas' data-bs-target='#sidebarNavExperience'>{proj.name}</Link>
                                </li>
                            );
                        }))}
                    </ul>
                </ul>
            </div>
        </div>
  )
}

export default Sidenav2
