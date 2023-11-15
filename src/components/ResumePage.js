import Header from "./Header"
import Contact from "./Contact"
import Resume from "./Resume"
import '../index.css'

const ResumePage = () =>{
    return(
        <div className="resume-page">
            <Header />
            <Resume />
            <Contact />
        </div>
    )
}

export default ResumePage