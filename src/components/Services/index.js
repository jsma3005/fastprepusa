import cls from './Services.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/autoplay';
import Title from '../Title';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive'
import { useEffect } from 'react';
import { servicesRequest } from '../../redux/reducers/services';
import Spinner from '../Spinner';

SwiperCore.use([Autoplay]);
const Services = () => {
    const {selectedLang: {services}, selectedLangSlug} = useSelector(s => s.langs);
    const {servicesData, servicesSuccess} = useSelector(s => s.services);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(servicesRequest())
    }, [dispatch])
    const isSmall = useMediaQuery({ query: '(max-width: 550px)' });
    const isLarge = useMediaQuery({ query: '(min-width: 1400px)' });

    return (
        <div className={cls.root} id='services'>
            <Title subTitle={services.subTitle} title={services.title} />
            <div className={cls.carousel}>
                <Swiper
                    slidesPerView={isSmall ? 1 : isLarge ? 4 : 3}
                    spaceBetween={50}
                    freeMode={true}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                >
                    {
                        servicesSuccess ? (
                            selectedLangSlug === "RU" ? (
                                servicesData.map(({image_icon, title_ru, id}) => (
                                    <SwiperSlide className={cls.slide} key={id}>
                                        <div className={cls.card + ' card'}>
                                            <div className={cls.imgBg} style={{background: `url('${image_icon}') center / cover no-repeat`}}>
        
                                            </div>
                                            <div className={cls.cardBody + ' card-body'}>
                                                <h5 className='card-title'>{title_ru}</h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            ) : (
                                servicesData.map(({image_icon, title_en, id}) => (
                                    <SwiperSlide className={cls.slide} key={id}>
                                        <div className={cls.card + ' card'}>
                                            <div className={cls.imgBg} style={{background: `url('${image_icon}') center / cover no-repeat`}}>
        
                                            </div>
                                            <div className={cls.cardBody + ' card-body'}>
                                                <h5 className='card-title'>{title_en}</h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            )
                        ) 
                        : 
                        servicesSuccess === false ? 
                            null
                        : (
                            <Spinner />
                        )
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Services;