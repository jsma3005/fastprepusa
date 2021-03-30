import Title from '../Title';
import cls from './Partners.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
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

    useEffect(() => {
        dispatch(partnersRequest())
    }, [dispatch])

    return (
        <div className={cls.root}>
            <Title subTitle='Оплата' title='Мы поддерживаем' />
            {
                partnersSuccess ? (
                    <Swiper
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        loop={true}
                        centeredSlides={true}
                        slidesPerView={3}
                        spaceBetween={100}
                    >
                        {
                            partnersData.map(({id, image, title}) => (
                                <SwiperSlide className={cls.slideItem} key={id}>
                                    <img src={image} alt={title} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                ) : (
                    <Spinner />
                )
            }
        </div>
    )
}

export default Partners