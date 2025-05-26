import { Link } from "react-router-dom"
import React from "react"

type Props = {
    firstname: string
}

function Header({firstname}: Props){
    return (
        <div>
            <nav style={{display: "flex", flexDirection: "row"}}>
                <menu style={{
                    display: "flex",
                    gap: "2rem",
                    justifyContent: "center"
                }}>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/blog"}>Blog</Link>
                    <Link to={"/blog/new"}>New Blog</Link>
                    <span>{firstname}</span>
                </menu>
            </nav>
        </div>
    )
}

export default React.memo(Header)