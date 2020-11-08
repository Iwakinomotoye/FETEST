import { NavLink } from 'react-router-dom'
import './baseNav.css';

export function BaseNav() {
    return (
        <nav className="nav">
            <ul>
                <li className="link-item">
                    <NavLink to="/" activeClassName="active" exact>
                        <span className="link-icon"></span>
                    </NavLink>
                </li>
                <li className="link-item">
                    <NavLink to="/account-detail" activeClassName="active">
                        <span className="link-icon"></span>
                    </NavLink>
                </li>
                <li className="link-item">
                    <NavLink to="/link3" activeClassName="active">
                        <span className="link-icon"></span>
                    </NavLink>
                </li>
                <li className="link-item">
                    <NavLink to="/link4" activeClassName="active" exact>
                        <span className="link-icon"></span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}