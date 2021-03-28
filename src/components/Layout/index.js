// import Footer from '../Footer';
import NavBar from '../NavBar';
import cls from './Layout.module.scss';

const Layout = ({children}) => {
    return (
        <div className={cls.root}>
            <NavBar />
            {children}
            {/* <Footer /> */}
        </div>
    )
}

export default Layout