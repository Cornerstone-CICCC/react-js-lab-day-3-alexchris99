import type{ Blog } from "../Types/blog"

// union
export type BlogAction =
| {type: "add", payload: Blog}
| {type: "edit", payload: Omit<Blog,"published">}
| {type: "delete", payload: {id: string}}


export function BlogReducer(state: Blog[], action: BlogAction ) : Blog[]{
    switch(action.type){
        case "add":
            return [
                ...state,
                action.payload
            ]
        case "delete":
            return  state.filter( blog => blog.id !== action.payload.id)
        case "edit":
            return state.map(blog => action.payload.id === blog.id ? {
                ...blog,
                title: action.payload.title ?? blog.title,
                content: action.payload.content ?? blog.content
            }: blog)
        default:
            return state
    }
}