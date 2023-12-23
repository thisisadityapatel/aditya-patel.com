import { useRouter } from "next/router";

const Post = () => {
    const router = useRouter();
    const {name, description, htmllink, topics} = router.query;

    console.log(topics);

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
                    <div className='h5 text-secondary' style={{fontStyle: 'italic'}}>Topics</div>
                    <hr />
                    <div>
                        <div className="mt-3 d-flex flex-wrap">
                            {topics == null?"":topics.map((item, index)=>{
                                return (<div key={index} className="rounded-pill me-1 my-1 px-1" style={{ backgroundColor: "#cfcccc", borderRadius: "20px", border: "2px solid #4d4d4d"}}><span>{item}</span></div>)
                            })}
                        </div>
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