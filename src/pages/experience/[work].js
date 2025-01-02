import React from 'react'
import { useRouter } from "next/router";
import { experiences } from "_data/expdata";

const Experience = ({ experiences }) => {
    const router = useRouter();
    const { work } = router.query;
    const temp = experiences.find((exp) => {
        return exp.work_id === work;
    })
    const technologies = temp.technologies;
    const imagesPath = temp.images;
    const companyLogo = temp.companylogo;
    let hasImages = true;
    let hasTechnologies = true;
    (imagesPath?.length) === 0 ? hasImages = false : hasImages = true;
    (technologies?.length) !== 0 ? hasTechnologies = true : hasTechnologies = false;

    return (
        <div className="container experinceDisplay experienceDiv">
            <div className="text-center mt-5">
                {companyLogo ? <img src={companyLogo} alt={temp.company} style={{ width: "10rem" }} /> : ''}
            </div>

            <h4 className="text-center mt-4">{temp.position}</h4>
            <div className="text-center text-secondary">{`${temp.worktype} | ${temp.from} - ${temp.to} | ${temp.location}`}</div>

            <div className="clearfix mt-5">
                {hasImages ?
                    <div id="internshipImagesCarousel" className="carousel slide text-center col-md-6 float-md-end mb-3 ms-md-3" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            {
                                imagesPath?.map((img, index) => {
                                    if (index == 0) {
                                        return <button key={index} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Team Pic:)"></button>
                                    }
                                    else {
                                        return <button key={index} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} aria-label="Other Pics"></button>
                                    }
                                })
                            }
                        </div>
                        <div className="carousel-inner">
                            {
                                imagesPath?.map((img, index) => {
                                    return <div key={index} className={"carousel-item " + (index == 0 ? "active" : "")} style={{ padding: "0px", border: "3px solid silver", borderRadius: "18px" }}><img src={img} className="w-100" alt={"nothing"} style={{ borderRadius: "15px" }} /></div>;
                                })}
                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#internshipImagesCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>

                        <button className="carousel-control-next" type="button" data-bs-target="#internshipImagesCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div> : ""}

                {temp.description?.map((des, i) => { return (<p key={i}>{des}</p>) })}
            </div>

            {hasTechnologies ? <div className="mt-3">
                <div className="h5 text-secondary">Technologies Used</div>
                <hr />
                <div>
                    <ul className="mt-1" style={{ listStyle: 'none', columns: '2', WebkitColumns: '2', MozColumns: '2', }}>
                        {technologies?.map((techs, index) => {
                            return (<li key={index}><i className="bi bi-caret-right greenColor"></i> {techs} </li>)
                        })}
                    </ul>
                </div>
            </div> : ""}
            <hr />
            <a className='btn btn-secondary projectVisitLink mb-5' href={temp.link} target="_blank" rel="noopener noreferrer">Company Website<i className='bi bi-box-arrow-up-right ms-1'></i></a>
        </div>
    )
}

export async function getStaticPaths() {
    return {
        paths: [{ params: { work: 'Wealthsimple' } }, { params: { work: 'RBC' } }, { params: { work: 'Scotiabank' } }, { params: { work: 'Enactus' } }, { params: { work: 'Ieee' } }],
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    return {
        props: { experiences },
    }
}

export default Experience
