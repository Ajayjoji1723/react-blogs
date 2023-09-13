import { Link } from "react-router-dom";

const BlogItem = props=>{
    const {blogDetails} = props;
    const {id, author,avatar_url, image_url,title,topic} = blogDetails;

   

    return(
        <li>
            <Link to={`/blogs/${id}`} className="card d-flex flex-row m-4" >
                <img src={image_url} alt={title} className="w-50"/>
                <div>
                    <p>{topic}</p>
                    <h1>{title}</h1><br/>
                    <div className="d-flex flex-row justify-content-start align-items-center">
                        <img src={avatar_url} alt={author} className="avatr m-3"/>
                        <p>{author}</p>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default BlogItem;