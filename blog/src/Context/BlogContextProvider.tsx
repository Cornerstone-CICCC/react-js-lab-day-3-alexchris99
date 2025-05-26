import {useReducer, type ReactNode } from "react";
import { BlogContext } from "./BlogContext";
import { BlogReducer } from "../Reducers/BlogReducer";

export const BlogContextProvider =({children} : {children: ReactNode})=>{
    const [blogs, dispatch] = useReducer(BlogReducer, [])
    return(
        <BlogContext value={{blogs, dispatch}}>
            {children}
        </BlogContext>
    )
}