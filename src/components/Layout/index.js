import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { enLangAction, ruLangAction } from '../../redux/actions/languageAction';
import Contacts from '../Contacts';
import GoTopBtn from '../GoTopBtn';
import NavBar from '../NavBar';
import cls from './Layout.module.scss';

const Layout = ({children}) => {
    const dispatch = useDispatch();
    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        const languageState = localStorage.getItem('fastpreplang');
        languageState === 'RU' ? dispatch(ruLangAction()) : dispatch(enLangAction());
    }, [dispatch])

    window.addEventListener('scroll', () => {
        if(window.scrollY >= 600){
            setShowBtn(true);
        }else{
            setShowBtn(false)
        }
    })

    return (
        <div className={cls.root}>
            {
                showBtn ? (
                    <GoTopBtn />
                ) : null
            }
            <NavBar />
            {children}
            <Contacts />
        </div>
    )
}

export default Layout