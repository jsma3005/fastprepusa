import cls from './NavBar.module.scss';
import { NavHashLink, HashLink } from 'react-router-hash-link'

const NavBar = () => {
    return (
        <div className={cls.root} id="navigation">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <HashLink className={`${cls.logo} navbar-brand`} to="/#navigation">Fast Prep USA</HashLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className={`${cls.navList} navbar-nav mb-2 mb-lg-0`}>
                            <li className="nav-item">
                                <NavHashLink className="nav-link" to="/about#nav">О нас</NavHashLink>
                            </li>
                            <li className="nav-item">
                                <NavHashLink className="nav-link" to="/#services">Услуги</NavHashLink>
                            </li>
                            <li className="nav-item">
                                <NavHashLink className="nav-link" to="/#prices">Цены</NavHashLink>
                            </li>
                            <li className="nav-item">
                                <NavHashLink className="nav-link" to="/#map">Склад на карте</NavHashLink>
                            </li>
                            <li className="nav-item">
                                <NavHashLink className="nav-link" to="/#contacts">Контакты</NavHashLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;