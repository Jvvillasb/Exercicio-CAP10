import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';

import { isTokenValid, logout } from '../../utils/auth';
import './styles.scss'

const NavBar = () => {
    const [isAuth, setIsAuth] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsAuth(isTokenValid())
    }, [location])

    const handleLogout = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        logout();
    }

    return (
        <nav className="nav-main">
            
                <NavLink to="/movies" className="nav-title">
                    MovieFlix
                </NavLink>
            
            {
                isAuth ? (
                    <button
                        className="nav-btn-logout"
                        type="button"
                        onClick={
                            (e) => {
                                handleLogout(e);

                            }
                        }
                    >
                        SAIR
                    </button>
                ) : null
            }


        </nav>
    )
}

export default NavBar;