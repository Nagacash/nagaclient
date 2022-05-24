import React from 'react'
import {
BrowserRouter as Router,
Switch,
Route,
useParams,
 } from "react-router-dom";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
// import Home from './Home';
// import AboutUs from './AboutUs';
// import ContactUs from './ContactUs';



class BootstrapNavbar extends React.Component{
render(){

return(
<div>
<div className="row">
<div className="col-md-12">

    

<Navbar bg="" variant="dark" expand="lg" sticky="top">
<Navbar.Brand href="#home" className="flex">Powered by Nagaswap.com</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="mr-auto flex">
<Nav.Link href="/">Home</Nav.Link>
<Nav.Link href="/about-us">Contact Us</Nav.Link>
{/* <Nav.Link href="/contact-us">About Us</Nav.Link> */}
<NavDropdown title="Dexes" id="basic-nav-dropdown">
<NavDropdown.Item href="#action/3.1">NFT Mint</NavDropdown.Item>

<NavDropdown.Divider />
<NavDropdown.Item href="https://nagaswap.com" > <span className="text-bold text-dark"> Buy Crypto</span></NavDropdown.Item>
</NavDropdown>
</Nav>

</Navbar.Collapse>
</Navbar>
<br />

</div>
</div>
</div>
)  
}
}
export default BootstrapNavbar;