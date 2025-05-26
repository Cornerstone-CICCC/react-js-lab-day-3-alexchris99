import { useContext } from "react";
import { BlogContext } from "./BlogContext";

export const useBlogs = ()=>{
    const context  = useContext(BlogContext)
    if (!context) throw Error("must be used inside BlogContextProvider")
    return context
}