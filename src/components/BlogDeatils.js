import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const BlogDetails = props =>{
    const params = useParams();
    const navigate = useNavigate()

    const [blogData, setBlogData] = useState({})
    const [isLoading, setLoading] = useState(true)

    const {id} = params

    useEffect(()=>{
        
        const url = `https://apis.ccbp.in/blogs/${id}`;
        const options = {
            method:"GET"
        }

        fetch(url, options)
        .then((response)=>{
            return response.json()
        })
        .then((jsonData)=>{
            
            setBlogData(jsonData)
            setLoading(false)
        })

    }, [])
    
    console.log(blogData)

    const onBackBtn = ()=>{
        navigate("/")
    }

    return(
        <div>
            {isLoading ? (<p>Loading...</p>):(
                <div >
                    <h1>{blogData.title}</h1>
                    <div className="d-flex flex-row justify-content-start align-items-center">
                        <img src={blogData.avatar_url} alt={blogData.author} className="avatr"/>
                        <p>{blogData.author}</p>
                    </div>
                    <img src={blogData.image_url} alt={blogData.title} className="w-75"/>
                    <p>{blogData.content}</p>
                    <button className="btn btn-warning mb-5" onClick={onBackBtn}>Back</button>
                </div>
            )}
        </div>
    )
}

export default BlogDetails;