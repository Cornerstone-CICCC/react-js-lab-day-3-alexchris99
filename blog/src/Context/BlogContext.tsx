import { createContext } from "react";
import type { BlogAction } from "../Reducers/BlogReducer";
import type { Blog } from "../Types/blog";


export type BlogContextType = {
    blogs: Blog[]
    dispatch: React.Dispatch<BlogAction>
}

export const BlogContext = createContext<BlogContextType>({
    blogs: [],
    dispatch: ()=>{}
})