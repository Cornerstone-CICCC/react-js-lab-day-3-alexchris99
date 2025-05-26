import { useBlogs } from "../Context/useBlog"
import { useState, type FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

export function BlogEdit(){
    const {blogs, dispatch}= useBlogs()
    const [title, setTitle] = useState<string>("")
    const [content, setContent] = useState<string>("")
    const id = (window.location).toString().split("/")[5]
    const blog = blogs.filter(blog => blog.id === id)
    const nav = useNavigate()

    const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        dispatch({
            type: "edit",
            payload:{
                id: id,
                title: title,
                content: content
            }
        })
        toast.success('Blog successfully updated')
        nav("/blog")
    }

    return (
        <div>
            <h1>Edit Blog</h1>
            <form onSubmit={(e)=>handleSubmit(e)} style={{display: "flex", flexDirection: "column"}}>
                <label>
                    Title: <input type="text" placeholder={blog[0].title} value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </label>
                <label>
                    Content: <input type="text" placeholder={blog[0].content} value={content} onChange={(e)=>setContent(e.target.value)}/>
                </label>
                <button type="submit">Update</button>
            </form>
        </div>
    )
}