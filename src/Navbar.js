import { Link } from 'react-router-dom';
const Navbar = () => {
    return ( 
        <nav className="Navbar">
            <h1> The dojo block</h1>
            <div className="link">
                <Link  to="/"> Home</Link>
                <Link to="/Create"> New Questions</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;