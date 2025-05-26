import { Outlet } from "react-router-dom"
import  Header  from "../Components/Header"
import { Footer } from "../Components/Footer"
import { Toaster} from "react-hot-toast"

export function  Layout(){
    return (
        <div>
            <div>
                <Toaster/>
            </div>
            <div>
                <Header firstname={"Chris"}/>
            </div>
            <main>
                <Outlet/>
            </main>
            <div>
                <Footer/>
            </div>
        </div>
    )
}