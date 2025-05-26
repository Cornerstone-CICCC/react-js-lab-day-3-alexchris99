import { useState, type FormEvent } from "react"
import {v4 as uuidv4} from "uuid"
import { useBlogs } from "../Context/useBlog"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

export function BlogNew(){

    const {dispatch} = useBlogs()
    const [title, setTitle] = useState<string>("")
    const [content, setContent] = useState<string>("")
    const nav = useNavigate()


    const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        dispatch({
            type: "add",
            payload: {
                id: uuidv4(),
                title: title,
                content: content,
                published: false
            }
        })
        toast.success('Blog added',{duration: 1000})
        nav("/blog")
    }


    return (
        <div>
            <h1>Create a new Blog</h1>
            <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column"}}>
                <label>
                    Title: <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </label>
                <label>
                    Content: <input type="text" value={content} onChange={(e)=>setContent(e.target.value)}/>
                </label>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}