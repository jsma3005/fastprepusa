import Contacts from '../Contacts';
import NavBar from '../NavBar';
import cls from './Layout.module.scss';

const Layout = ({children}) => {
    return (
        <div className={cls.root}>
            <NavBar />
            {children}
            <Contacts />
        </div>
    )
}

export default Layout