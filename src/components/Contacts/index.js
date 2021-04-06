import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { socialRequest } from '../../redux/reducers/social';
import { NavHashLink, HashLink } from 'react-router-hash-link'
import Spinner from '../Spinner';
import cls from './Contacts.module.scss';

const Contacts = () => {
    const dispatch = useDispatch();
    const {socialData, socialSuccess} = useSelector(s => s.social);
    const {selectedLang: {contacts}} = useSelector(s => s.langs);

    useEffect(() => {
        dispatch(socialRequest());
    }, [dispatch])

    return (
        <div id="contacts" className={cls.root}>
            <div className='row'>
                <div className='col-lg-4 col-md-6'>
                    <h5 className={cls.title}>Fast Prep USA</h5>
                    <ul className={cls.contactsList}>
                        <li><b>{contacts.address}:</b> <HashLink to="/#map">7420 Avenida Del Mar, unit 2601</HashLink></li>
                        <li><b>{contacts.number}:</b> <a href="tel:+1(347)444-2565">+1(347)444-2565</a></li>
                        <li><b>{contacts.email}:</b> <a href="mailto:office@fastprepusa.com">office@fastprepusa.com</a></li>
                        <li><b>{contacts.timeTitle}:</b> <span>{contacts.time}</span></li>
                    </ul>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <h5 className={cls.title}>{contacts.nav}</h5>
                    <ul className={cls.navList}>
                        {
                            contacts.navData.map(({link, title, id}) => (
                                <li key={id}>
                                    <NavHashLink to={link}>{title}</NavHashLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='col-lg-4 col-md-12'>
                    <h5 className={cls.title}>{contacts.social}</h5>
                    <ul className={cls.socialList}>
                        {
                            socialSuccess ? (
                                socialData.map(({id, link, image_icon}) => (
                                    <li key={id}>
                                        <a className={cls.socialLinks} target='_blank' rel='noreferrer' href={link}>
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

                <p className={cls.copyright}>2019 © Fast Prep Usa.</p>
            </div>
        </div>
    )
}

export default Contacts