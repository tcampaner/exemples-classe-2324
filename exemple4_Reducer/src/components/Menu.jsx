import {Link, Outlet} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Contexte} from '../contexts/Contexte';
import { useContext } from 'react';
export default function Menu() {
    const contexte=useContext(Contexte);
    return (
        <>
            <Navbar bg="dark" className="color-nav" variant="dark" expand="sm" sticky="top">
                <Nav className="mr-auto">
                    {console.log(contexte)}
                    {contexte.estatLogin.token && <>
                        <Link className="nav-link" to="/feines">Feines</Link>
                        <Link className="nav-link" to="/municipis">Municipis</Link>
                        <Link className="nav-link" to="/municipistable">Municipis Table</Link>
                        <Link className="nav-link" to="/autors">Autors</Link>
                        <Link className="nav-link" to="/logout">Logout</Link>
                    </>}
                    <Link className="nav-link" to="/ajuda">Ajuda</Link>
                    {!contexte.estatLogin.token && <Link className="nav-link" to="/login">Login</Link>}
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        {contexte.estatLogin.token && <>Usuari: {contexte.estatLogin.usuari.email}&nbsp;&nbsp;</>}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
            <Container>
                <Outlet />
            </Container>
        </>
    );
}