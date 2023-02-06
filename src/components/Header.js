import { FaShoppingCart } from "react-icons/fa";
import logo from '../site_logo_1.jpg'
import { useState } from "react";

const Title = () =>(
    <div className="title">
        <a style={{'color' : 'black'}} href="/">
            <img className="site-logo" src={logo} alt='site-logo' />
            <h1 className="site-header">India eats </h1>
        </a>
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
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li><FaShoppingCart/></li>
                <li>{(loggedIn) ? <button onClick={()=>setLoggedIn(false)} >  LogOut</button> : <button onClick={()=>setLoggedIn(true)} > Login</button>}</li>
            </ul>
        </div>
    </div>
)}

export default Header;