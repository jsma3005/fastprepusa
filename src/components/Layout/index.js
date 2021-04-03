import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { enLangAction, ruLangAction } from '../../redux/actions/languageAction';
import Contacts from '../Contacts';
import NavBar from '../NavBar';
import cls from './Layout.module.scss';

const Layout = ({children}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const languageState = localStorage.getItem('fastpreplang');
        languageState === 'RU' ? dispatch(ruLangAction()) : dispatch(enLangAction());
    }, [dispatch])


    return (
        <div className={cls.root}>
            <NavBar />
            {children}
            <Contacts />
        </div>
    )
}

export default Layout