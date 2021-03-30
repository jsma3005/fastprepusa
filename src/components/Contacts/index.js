import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { socialRequest } from '../../redux/reducers/social';
import Spinner from '../Spinner';
import cls from './Contacts.module.scss';

const navData = [
    {
        id: 1,
        title: 'Главная',
        link: '/#navigation',
    },
    {
        id: 2,
        title: 'О нас',
        link: '/about'
    },
    {
        id: 3,
        title: 'Услуги',
        link: '/#services'
    },
    {
        id: 4,
        title: 'Цены',
        link: '/#price'
    },
    {
        id: 5,
        title: 'Склад на карте',
        link: '/#map'
    }
]

const Contacts = () => {
    const dispatch = useDispatch();
    const {socialData, socialSuccess} = useSelector(s => s.social);
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        dispatch(socialRequest());
    }, [dispatch])


    return (
        <div className={cls.root}>
            <div className='row'>
                <div className='col-lg-4'>
                    <h5 className={cls.title}>Fast Prep USA</h5>
                    <ul className={cls.contactsList}>
                        <li><b>Адрес:</b> <a href="/">7420 Avenida Del Mar, unit 2601</a></li>
                        <li><b>Номер телефона:</b> <a href="tel:+1(347)444-2565">+1(347)444-2565</a></li>
                        <li><b>Электронная почта:</b> <a href="mailto:office@fastprepusa.com">office@fastprepusa.com</a></li>
                        <li><b>Время работы:</b> <a>ПН-ПТ: 8:00AM - 6:00PM</a></li>
                    </ul>
                </div>
                <div className='col-lg-4'>
                    <h5 className={cls.title}>Навигация по сайту</h5>
                    <ul className={cls.navList}>
                        {
                            navData.map(({link, title, id}) => (
                                <li key={id}>
                                    <a href={link}>{title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='col-lg-4'>
                    <h5 className={cls.title}>Социальные сети</h5>
                    <ul className={cls.socialList}>
                        {
                            socialSuccess ? (
                                socialData.map(({id, link, image_icon}) => (
                                    <li key={id}>
                                        <a target='_blank' rel='noreferrer' href={link}>
                                            <img src={image_icon} alt='social' />
                                        </a>
                                    </li>
                                ))
                            ) : (
                                <Spinner />
                            )
                        }
                    </ul>
                </div>

                <p className={cls.copyright}>{currentYear} © Fast Prep Usa.</p>
            </div>
        </div>
    )
}

export default Contacts