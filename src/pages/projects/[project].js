import { useRouter } from "next/router";

const Post = () => {
    const router = useRouter();
    const { project, name, description, htmllink, technologies} = router.query;

    return (
        <div className="projectDescription container">
            <div className="indProjDetails">
                <h2 className="text-center mt-4">{name}</h2>
                <div className='mt-5'>
                    <div className='h5 text-secondary' style={{fontStyle: 'italic'}}>Description</div>
                    <hr />
                    <div>
                        {description}
                    </div>
                </div>
                <div className='mt-5'>
                    <div className='h5 text-secondary' style={{fontStyle: 'italic'}}>Technology & Concepts</div>
                    <hr />
                    <div>
                        {}
                    </div>
                </div>
                <div className='mt-5'>
                    <a className='btn btn-secondary projectVisitLink' href={htmllink}>Visit <i className='bi bi-box-arrow-up-right ms-1'></i></a>
                </div>
            </div>
        </div>
    )
}
export default Post