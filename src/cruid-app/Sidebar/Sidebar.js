import { Link } from "react-router-dom";


const Sidebar =()=>{
   return(
    <>
    <ul className="list-unstyled">
        <li>
            <Link to='/products'>get all producta</Link>
        </li>
        <li>
            <Link to='/'>get all categories</Link>
        </li>
    </ul>
    </>
       
   )
}
export default Sidebar;