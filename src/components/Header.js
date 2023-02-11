import { FaShoppingCart } from "react-icons/fa";
import logo from '../assets/site_logo_1.jpg'
import { useState } from "react";
import { Link } from "react-router-dom";
const Title = () =>(
    <div className="title">
        <Link style={{'color' : 'black'}} to="/">
            <img className="site-logo" src={logo} alt='site-logo' />
            <h1 className="site-header">India eats </h1>
        </Link>
        <p className="site-tagline">  Giving your Hunger a new Option</p>
    </div>
)

const Header = () =>{
    const [ loggedIn , setLoggedIn ] = useState(false)
    return(
    <div className="header" >
        <Title/>
        <div className="nav-items" >
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
                <Link><FaShoppingCart /></Link>
                <li>{(loggedIn) ? <button onClick={()=>setLoggedIn(false)} >  LogOut</button> : <button onClick={()=>setLoggedIn(true)} > Login</button>}</li>
            </ul>
        </div>
    </div>
)}

export default Header;