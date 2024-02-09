import React from 'react'
import Image from 'next/image'

export const universityCourses = [
    "CPS305 Data Structures",
    "CPS393 Introduction to UNIX, C and C++",
    "CPS506 Comparative Programming Languages",
    "CPS590 Operating Systems",
    "CPS109 Computer Science 1",
    "CPS109 Computer Science 2",
    "CPS213 Computer Organization 1",
    "CPS310 Computer Organization 2",
    "MTH207 Calculus & Computation 1",
    "MTH110 Discrete Mathematics I",
    "CPS420 Discrete Structures",
    "MTH108 Linear Algebra",
]

const Education = () => {
  return (
    <div className="educationDiv container portfolioElement">
            <div className="text-center my-5" >
                <img src="/tmu.gif" alt="tmu gif" style={{width: "9rem"}}></img>
            </div>

            <h4 className="text-center">{"Bachelor of Science (Honours), "}<span className="fw-bold">{"Computer Science"}</span>{"(Co-op)"}</h4>
            <h6 className="text-center text-secondary">{"September 2021 - Present"}</h6>

            <div className="mt-5">
                <div className="h5 text-secondary">{"Relevent Coursework"}</div>
                <hr />
                <div className="pt-1 courseListGrid">
                   {" Here are the relevent couses I have taken so far:"}
                    <ul className="mt-1" style={{listStyle:'none', columns: '2'}}>
                        {universityCourses.map((course, index) => {
                            return <li key={index}><i className="bi bi-caret-right greenColor"></i>{course}</li>
                        })}
                    </ul>
                </div>
            </div>

            <div className="mt-5 mb-5">
                <div className="h5 text-secondary">{"Extracurricular Activities"}</div>
                <hr />
                <p>
                   {"In addition to my academic pursuits, I have a passion for swimming. I thrive on acquiring and honing new skills, which is why I recently took up ice skating and now dedicate considerable effort towards improving my abilities on the ice."}
                </p>
                <p>
                   {"In high school, I was not only a member of the athletic teams for clusters but also a professional soccer player. Furthermore, I have earned multiple medals in various athletic events, such as the long-jump, 100-meter, and 200-meter sprints."}
                </p>
            </div>

            <div className="mt-5">
                <div className="h5 text-secondary">{"Awards"}</div>
                <hr />
                <div className="pt-1 courseListGrid">
                    <ul className="mt-1" style={{listStyle:'none'}}>
                        <li><i className="bi bi-caret-right greenColor"></i>{"TMU Dean's List (2022-23)"}</li>
                        <li><i className="bi bi-caret-right greenColor"></i>{"TMU Dean's List (2021-22)"}</li>
                    </ul>
                </div>
            </div>
    </div>
  )
}

export default Education
