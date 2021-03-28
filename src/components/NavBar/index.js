import { Link } from 'react-router-dom';
import cls from './NavBar.module.scss';

const NavBar = () => {
    return (
        <div className={cls.root}>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className={`${cls.logo} navbar-brand`} to="/">Fast Prep USA</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className={`${cls.navList} navbar-nav mb-2 mb-lg-0`}>
                            <li className="nav-item">
                                <a className="nav-link" href="/">О нас</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Услуги</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Цены</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Склад на карте</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Контакты</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;