import { useSelector } from 'react-redux';
import Spinner from '../Spinner';
import Title from '../Title';
import cls from './Social.module.scss';

const Social = () => {
    const {socialData, socialSuccess} = useSelector(s => s.social);
    console.log(socialData);

    return (
        <div className={cls.root}>
            <Title title='Напишите нам' subTitle='Связь с нами' />
            <div className={cls.wrapper}>
                {
                    socialSuccess ? (
                        socialData.map(({image_icon, id, link, title}) => (
                            <div className={cls.button} key={id}>
                                <div className={cls.icon}>
                                    <img alt='Social' src={image_icon} />
                                </div>
                                <span><a target="_blank" rel='noreferrer' href={link}>{title}</a></span>
                            </div>
                        ))
                    ) : (
                        <Spinner />
                    )
                    
                }
            </div>
        </div>
    )
}

export default Social;