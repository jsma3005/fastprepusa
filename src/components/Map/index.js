import { useSelector } from 'react-redux';
import Title from '../Title';
import cls from './Map.module.scss';

const Map = () => {
    const {selectedLang: {map}} = useSelector(s => s.langs);

    return (
        <div className={cls.root} id="map">
            <Title subTitle={map.subTitle} title={map.title} />
            <div className={cls.map}>
                <iframe title='Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2259.8916716305075!2d-80.15972943998518!3d26.345186599881885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91c395a097c2d%3A0xb1f248229109ad4a!2zNzQyMCBBdmVuaWRhIERlbCBNYXIsIEJvY2EgUmF0b24sIEZMIDMzNDMzLCDQodCo0JA!5e0!3m2!1sru!2skg!4v1617110028025!5m2!1sru!2skg" width="100%" height="500px" style={{border: 0}} allowFullScreen="" loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default Map