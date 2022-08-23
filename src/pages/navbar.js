import { Link } from "react-router-dom"

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>the The Blog</h1>
            <div className="links">
                <Link to="/">All posts</Link>
                <Link to="/addingPost">New blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;