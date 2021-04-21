import Title from '../Title';
import cls from './Partners.module.scss';
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import SwiperCore, { Autoplay } from 'swiper';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { partnersRequest } from '../../redux/reducers/partners';
import 'swiper/components/effect-fade/effect-fade.scss';
import Spinner from '../Spinner';

SwiperCore.use([Autoplay]);

const Partners = () => {
    const dispatch = useDispatch();
    const { partnersData, partnersSuccess } = useSelector(s => s.partners);
    const { selectedLang: {partners} } = useSelector(s => s.langs);

    useEffect(() => {
        dispatch(partnersRequest())
    }, [dispatch])

    return (
        <div className={cls.root}>
            <Title subTitle={partners.subTitle} title={partners.title} text={partners.titleText} />
            {
                partnersSuccess ? (
                    <div
                        className={cls.payContainer}
                    >
                        {
                            partnersData.map(({id, image, title}) => (
                                <div className={cls.slideItem} key={id}>
                                    <img src={image} alt={title} />
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <Spinner />
                )
            }
        </div>
    )
}

export default Partners