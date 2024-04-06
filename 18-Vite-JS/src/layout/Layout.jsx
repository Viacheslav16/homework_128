import { NavLink, Outlet } from "react-router-dom";
import { Container, Navbar, Nav} from 'react-bootstrap';

export default function Layout(){
    return <div className="page-content">
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="about/" >About</NavLink>
                </Nav>
            </Container>
        </Navbar>
        <div className="container">
            <Outlet/>
        </div>
    </div>
}