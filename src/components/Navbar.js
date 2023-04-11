import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Image } from 'react-bootstrap';
import {FaUser} from 'react-icons/fa';
import {useState,useEffect} from "react";
import {useNavigate} from "react-router-dom"

function RedBusNavbar() {
  const navigate = useNavigate();
  const [userName , setUserName] = useState(null);
  useEffect(() => {
    let value = window.localStorage.getItem("token");
    value = JSON.parse(value);
    setUserName(value.username);
  },[])
  const logout = () => {
    window.localStorage.removeItem("token");
    setUserName(null)
    navigate("/login");
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Container>
        <Image src="https://www.redbus.in/i/59538b35953097248522a65b4b79650e.png" />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" className='ms-2'>Bus Tickets</Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link>
            */}
          </Nav>
          <Nav>
          <NavDropdown title={<FaUser />} id="collasible-nav-dropdown">
              <NavDropdown.Item >{userName ? userName : ""}</NavDropdown.Item>              
              <NavDropdown.Item onClick={logout} >Sign Out</NavDropdown.Item>              
            </NavDropdown> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default RedBusNavbar;