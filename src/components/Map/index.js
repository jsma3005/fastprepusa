import { useSelector } from 'react-redux';
import Title from '../Title';
import cls from './Map.module.scss';

const Map = () => {
    const {selectedLang: {map}} = useSelector(s => s.langs);

    return (
        <div className={cls.root} id="map">
            <Title subTitle={map.subTitle} title={map.title} text={map.titleText} />
            <div className={cls.map}>
                <iframe title='Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.622263047964!2d-80.11577388496849!3d26.27392028340684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91db8fcd9b8d9%3A0xacf54509c9e5b179!2sFast%20Prep%20USA!5e0!3m2!1sen!2sus!4v1624661691388!5m2!1sen!2sus" width="100%" height="500px" style={{border: 0}} allowFullScreen="" loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default Map