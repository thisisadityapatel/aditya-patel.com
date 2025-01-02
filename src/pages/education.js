import React from 'react'

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
                <img src="/tmu.gif" alt="tmu gif" style={{ width: "9rem" }}></img>
            </div>
            <h4 className="text-center">{"Bachelor of Science (Hons.), "}<span className="fw-bold">{"Computer Science"}</span>{" Co-op"}</h4>
            <div className="mt-5">
                <div className="h5 text-secondary">{"Relevent Coursework"}</div>
                <hr />
                <div className="pt-1 courseListGrid">
                    {" Here are the relevent couses I have taken so far:"}
                    <ul className="mt-1" style={{ listStyle: 'none', columns: '2' }}>
                        {universityCourses.map((course, index) => {
                            return <li key={index}><i className="bi bi-caret-right greenColor"></i>{course}</li>
                        })}
                    </ul>
                </div>
            </div>
            <div className="mt-5">
                <div className="h5 text-secondary">{"Awards"}</div>
                <hr />
                <div className="pt-1 courseListGrid">
                    <ul className="mt-1" style={{ listStyle: 'none' }}>
                        <li><i className="bi bi-caret-right greenColor"></i>{"TMU Dean's Honours List (all academic terms)"}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Education
