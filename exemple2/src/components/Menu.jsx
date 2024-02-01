import {Link, Outlet} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
export default function Menu({usuari}) {
    return (
        <>
            <Navbar bg="dark" className="color-nav" variant="dark" expand="sm" sticky="top">
                <Nav className="mr-auto">
                    {usuari && <>
                        <Link className="nav-link" to="/feines">Feines</Link>
                        <Link className="nav-link" to="/municipis">Municipis</Link>
                        <Link className="nav-link" to="/municipistable">Municipis Table</Link>
                        <Link className="nav-link" to="/autors">Autors</Link>
                        <Link className="nav-link" to="/logout">Logout</Link>
                    </>}
                    <Link className="nav-link" to="/ajuda">Ajuda</Link>
                    {!usuari && <Link className="nav-link" to="/login">Login</Link>}
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        {usuari && <>Usuari: {usuari.email}&nbsp;&nbsp;</>}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
            <Container>
                <Outlet />
            </Container>
        </>
    );
}