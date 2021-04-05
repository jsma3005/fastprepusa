import cls from './Services.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/autoplay';
import FBA from '../../assets/services/fba.jpg';
import Bundles from '../../assets/services/bundles.jpg';
import Img1 from '../../assets/item1.jpg';
import Removal from '../../assets/services/removal-orders.jpg';
import Glass from '../../assets/services/glass.jpg';
import Back from '../../assets/services/back.jpg';
import Storage from '../../assets/services/storage.jpg';
import Vykup from '../../assets/services/vykup.jpg';
import Title from '../Title';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive'

const carouselData = [
    {
        id: 1,
        title: 'Обработка товаров для FBA',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum sagittis diam, eu sodales neque fermentum id. Mauris metus ante.',
        img: FBA
    },
    {
        id: 2,
        title: 'Обработка товаров для FBM',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum sagittis diam, eu sodales neque fermentum id. Mauris metus ante.',
        img: Img1
    },
    {
        id: 3,
        title: 'Формирование сетов, бандлов',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum sagittis diam, eu sodales neque fermentum id. Mauris metus ante.',
        img: Bundles
    },
    {
        id: 4,
        title: 'Прием Removal orders',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum sagittis diam, eu sodales neque fermentum id. Mauris metus ante.',
        img: Removal
    },
    {
        id: 5,
        title: 'Обработка стекла',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum sagittis diam, eu sodales neque fermentum id. Mauris metus ante.',
        img: Glass
    },
    {
        id: 6,
        title: 'Прием и обработка возвратов',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum sagittis diam, eu sodales neque fermentum id. Mauris metus ante.',
        img: Back
    },
    {
        id: 7,
        title: 'Хранение',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum sagittis diam, eu sodales neque fermentum id. Mauris metus ante.',
        img: Storage
    },
    {
        id: 8,
        title: 'Выкуп товар в онлайн магазинах США',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum sagittis diam, eu sodales neque fermentum id. Mauris metus ante.',
        img: Vykup
    }
]

SwiperCore.use([Autoplay]);
const Services = () => {
    const {selectedLang: {services}} = useSelector(s => s.langs);
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
                        carouselData.map(item => (
                            <SwiperSlide className={cls.slide} key={item.id}>
                                <div className={cls.card + ' card'}>
                                    <div className={cls.imgBg} style={{background: `url('${item.img}') center / cover no-repeat`}}>

                                    </div>
                                    <div className={cls.cardBody + ' card-body'}>
                                        <h5 className='card-title'>{item.title}</h5>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Services;