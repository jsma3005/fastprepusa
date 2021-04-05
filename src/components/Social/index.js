import { useSelector } from 'react-redux';
import Spinner from '../Spinner';
import Title from '../Title';
import cls from './Social.module.scss';
import { useMediaQuery } from 'react-responsive'

const Social = () => {
    const {socialData, socialSuccess} = useSelector(s => s.social);
    const isSmall = useMediaQuery({ query: '(max-width: 500px)' });

    const splittedStr = str => {
        return str.split('');
    }


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
                                <span>
                                    {
                                        isSmall ? (
                                            <a href={link} target="_blank" rel='noreferrer' className={cls.splittedContainer}>
                                                {splittedStr(title).map((item, index) => (
                                                    <span key={index} className={cls.splittedSpan}>{item}</span>
                                                ))}
                                            </a>
                                        ) : (
                                            <a target="_blank" rel='noreferrer' href={link}>{title}</a>
                                        )
                                    }
                                </span>
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