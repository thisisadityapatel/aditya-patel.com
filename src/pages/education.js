import React from 'react'
import { courses } from '_data/courses'

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
                        {courses.map((course, index) => {
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
