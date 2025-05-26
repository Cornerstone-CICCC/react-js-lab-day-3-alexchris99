import { useBlogs } from "../Context/useBlog"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"


export function Blog(){
    const {blogs, dispatch} = useBlogs()
    const nav = useNavigate()

    const handleDelete=(id: string)=>{
        dispatch({
            type: "delete",
            payload:{
                id: id
            }
        })
        toast.error("Blog deleted")
    }

    const handleEdit=(id: string)=>{
        nav(`/blog/edit/${id}`)
    }

    const handleDetail  = (id: string)=>{
        nav(`/blog/${id}`)
    }

    return (
        <div>
            <h1>Blogs</h1>
            <ul>
                {blogs.map(blog=>(
                    <li key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.content}</p>
                        <p onClick={()=>handleDetail(blog.id)}>See more...</p>
                        <button type="button" onClick={()=>handleEdit(blog.id)}>Edit</button>
                        <button type="button" onClick={()=>handleDelete(blog.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}