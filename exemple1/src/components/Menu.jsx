import {Link, Outlet} from 'react-router-dom';
export default function Menu() {
    return (
        <>
      <nav>
        <ul>
          <li>
            <Link to="/">Menu</Link>
          </li>
          <li>
            <Link to="/feines">Feines</Link>
          </li>
          <li>
            <Link to="/ajuda">Ajuda</Link>
          </li>
        </ul>
      </nav>
      <hr/>
      <Outlet/>
      </>
    );
}