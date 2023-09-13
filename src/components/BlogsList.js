import { useState, useEffect } from "react";
import BlogItem from "./BlogItem";

const BlogsList = ()=>{
    const [blogsList, setBlogsList] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(()=>{
        
        fetchBlogs();
        
    },[]);

    const fetchBlogs = ()=>{
        
        const url = "https://apis.ccbp.in/blogs"

        const options = {
            method:"GET"
        }
        setLoading(true)
        fetch(url, options)
        .then((response)=>{
            return response.json()
            
        })
        .then((jsonData)=>{
           setBlogsList(jsonData)
           setLoading(false)
        })
    }

    console.log(blogsList)
    console.log(isLoading)

    return(
        <div >
            <ul className="blogs_container">
                {isLoading ? (
                <div className="spinner-border text-warning "></div>
                ):(
                    blogsList.map((eachBlog)=>(
                        <BlogItem 
                        blogDetails = {eachBlog}
                        key = {eachBlog.id}
                        />
                    ))
                )}
            </ul>
        </div>
    )
}

export default BlogsList;