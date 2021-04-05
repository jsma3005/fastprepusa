import { useEffect, useState } from 'react';
import cls from './Header.module.scss';
import Img1 from '../../assets/bg1-min.jpg';
import Img2 from '../../assets/bg2-min.jpg';
import Img3 from '../../assets/bg4.jpg';
// Swiper
import SwiperCore, { Autoplay, EffectFade} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/autoplay';
import 'swiper/components/effect-fade/effect-fade.scss';
// Text Animation
import TextTransition, { presets } from "react-text-transition";
import { useSelector } from 'react-redux';

const carouselData = [
    {
        id: 1,
        title: 'Prep1',
        img: Img3
    },
    {
        id: 2,
        title: 'Prep2',
        img: Img2
    },
    {
        id: 3,
        title: 'Prep3',
        img: Img1
    }
]

SwiperCore.use([Autoplay, EffectFade]);

const Header = () => {
    const [index, setIndex] = useState(0);
    const {selectedLang: {header}} = useSelector(s => s.langs);

    useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            2500 // every 2.5 seconds
        );    
        return () => clearTimeout(intervalId);
    }, []) 

    return (
        <div className={cls.root}>
            <Swiper
                effect='fade'
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
            >
                {
                    carouselData.map(item => (
                        <SwiperSlide className={cls.img} style={{background: `url('${item.img}') center / cover no-repeat`}} key={item.id}>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className={cls.content}>
                <h1>
                    <TextTransition
                        text={ header.texts[index % header.texts.length] }
                        springConfig={ presets.slow }
                        direction='down'
                    />
                </h1>
                <h1 className={cls.coloredTitle}>
                    {header.title}
                </h1>
                <h1>
                    {header.subTitle}
                </h1>
            </div>
        </div>
    )
}

export default Header;