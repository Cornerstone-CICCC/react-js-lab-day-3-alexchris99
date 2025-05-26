import { useBlogs } from "../Context/useBlog"

export function BlogDetail(){
    const {blogs} = useBlogs()
    const id = (window.location).toString().split("/")[4]
    const blog = blogs.filter(blog => blog.id === id)
    return (
        <div>
            <h1>{blog[0].title}</h1>
            <p>{blog[0].content}</p>
        </div>
    )
}