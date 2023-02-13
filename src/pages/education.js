import React from 'react'
// import tmuimage from 'public/tmu.gif'
import Image from 'next/image'

const Education = () => {
  return (
    <div className="educationDiv container portfolioElement">
            <div className="text-center my-5" >
                <img src="/tmu.gif" alt="tmu gif" style={{width: "14rem"}}></img>
            </div> 

            <h4 className="text-center">{"Bachelor's of Science (Honours), "}<span className="fw-bold">{"Computer Science"}</span>{"(Co-op)"}</h4>
            <h6 className="text-center text-secondary">{"September 2021 - May 2025"}</h6>

            <div className="mt-5">
                <div className="h5 text-secondary">{"Awards"}</div>
                <hr />
                <div className="pt-1 courseListGrid">
                    <ul className="mt-1" style={{listStyle:'none'}}>
                        <li><i className="bi bi-caret-right greenColor"></i>{"Dean's List (2021 - 2022)"}</li>
                    </ul>
                </div>
            </div>

            <div className="mt-5">
                <div className="h5 text-secondary">{"Relevent Coursework"}</div>
                <hr />
                <div className="pt-1 courseListGrid">
                   {" Here are the relevent couses I have taken so far:"}
                    <ul className="mt-1" style={{listStyle:'none'}}>
                        <li><i className="bi bi-caret-right greenColor"></i>{"CPS305 Data Structures"}</li>
                        <li><i className="bi bi-caret-right greenColor"></i>{"CPS393 Introduction to UNIX, C and C++"}</li>
                        <li><i className="bi bi-caret-right greenColor"></i>{"CPS109 Computer Science 1"}</li>
                        <li><i className="bi bi-caret-right greenColor"></i>{"CPS209 Computer Science 2"}</li>
                        <li><i className="bi bi-caret-right greenColor"></i>{"CPS213 Computer Organization 1"}</li>
                        <li><i className="bi bi-caret-right greenColor"></i>{"CPS310 Computer Organization 2"}</li>
                        <li><i className="bi bi-caret-right greenColor"></i>{"MTH207 Calculus & Computation 1"}</li>
                        <li><i className="bi bi-caret-right greenColor"></i>{"MTH110 Discrete Mathematics I"}</li>
                        <li><i className="bi bi-caret-right greenColor"></i>{"MTH108 Linear Algebra"}</li>
                    </ul>
                </div>
            </div>

            <div className="mt-5 mb-5">
                <div className="h5 text-secondary">{"Extracurricular Activities"}</div>
                <hr />
                <p>
                   {"Aside from academics, I like swimming. I'm the type of person that enjoys learning and perfecting new skills. I recently learned to ice skate and frequently find myself working on improving my skills."}
                </p>
                <p>
                   {"During high school, I was a member of the athletic teams for clustures and a professional soccer player. I also have achieved several medals in athlectic events like long-jump, 100m & 200m sprints."}
                </p>
            </div>
    </div>
  )
}

export default Education
