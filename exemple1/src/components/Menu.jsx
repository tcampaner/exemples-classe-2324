import {Link, Outlet} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
export default function Menu() {
    return (
        <>
            <Navbar bg="dark" className="color-nav" variant="dark" expand="sm" sticky="top">
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/feines">Feines</Link>
                    <Link className="nav-link" to="/municipis">Municipis</Link>
                    <Link className="nav-link" to="/municipistable">Municipis Table</Link>
                    <Link className="nav-link" to="/autors">Autors</Link>
                    <Link className="nav-link" to="/ajuda">Ajuda</Link>
                </Nav>
            </Navbar>
            <Container>
                <Outlet />

            </Container>
        </>
    );
}