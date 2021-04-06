import cls from './NavBar.module.scss';
import { NavHashLink, HashLink } from 'react-router-hash-link';
// import RuFlag from '../../assets/russia.svg';
// import EnFlag from '../../assets/usa.svg';
import { useDispatch, useSelector } from 'react-redux';
import { enLangAction, ruLangAction } from '../../redux/actions/languageAction';
import { GiHamburgerMenu } from 'react-icons/gi';

const NavBar = () => {
    const dispatch = useDispatch();
    const {selectedLangSlug, selectedLang: {navbar}} = useSelector(s => s.langs);
    // const FLAG = selectedLangSlug === 'RU' ? EnFlag : RuFlag;
    const LANG_TITLE = selectedLangSlug === 'RU' ? 'Русский' : 'English'

    const handleChangeLang = () => {
        if(selectedLangSlug === 'RU'){
            dispatch(enLangAction());
            localStorage.setItem('fastpreplang', 'EN')
        }else{
            dispatch(ruLangAction());
            localStorage.setItem('fastpreplang', 'RU')
        }
    }

    const closeCollase = e => {
        e.preventDefault();

        const collapse = document.querySelector('#navbarSupportedContent');
        collapse.classList.remove('show');
    }

    return (
        <div className={cls.root} id="navigation">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <HashLink className={`${cls.logo} navbar-brand`} to="/#navigation">Fast Prep USA</HashLink>
                    <button className={`${cls.toggler} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <GiHamburgerMenu className={cls.burger} />
                        </span>
                    </button>
                    <div className={`${cls.collapse} collapse navbar-collapse`} id="navbarSupportedContent">
                        <ul className={`${cls.navList} navbar-nav mb-2 mb-lg-0`}>
                            <li onClick={closeCollase} className="nav-item">
                                <NavHashLink className="nav-link" to="/about#nav">{navbar.about}</NavHashLink>
                            </li>
                            <li onClick={closeCollase} className="nav-item">
                                <NavHashLink className="nav-link" to="/#services">{navbar.services}</NavHashLink>
                            </li>
                            <li onClick={closeCollase} className="nav-item">
                                <NavHashLink className="nav-link" to="/#prices">{navbar.prices}</NavHashLink>
                            </li>
                            <li onClick={closeCollase} className="nav-item">
                                <NavHashLink className="nav-link" to="/#map">{navbar.map}</NavHashLink>
                            </li>
                            <li onClick={closeCollase} className="nav-item">
                                <NavHashLink className="nav-link" to="/#contacts">{navbar.contacts}</NavHashLink>
                            </li>
                            <li onClick={e => {
                                handleChangeLang();
                                closeCollase(e);
                            }} className={cls.lang + ' nav-item'}>
                                <p className='nav-link'>{LANG_TITLE}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;