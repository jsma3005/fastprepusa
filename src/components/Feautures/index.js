import { useSelector } from 'react-redux';
import cls from './Feautures.module.scss';

const Feautures = () => {
    const {selectedLang: {feautures}} = useSelector(s => s.langs);

    return (
        <div className={cls.root}>
            <div className='row m-0'>
                <div className={`${cls.left} col-lg-5`}>
                </div>
                <div className={`${cls.right} col-lg-7`}>
                    <h1 className={cls.rightTitle}>{feautures.title}</h1>
                    <div className={cls.line}></div>
                    <div>
                        {
                            feautures.feauturesList.map(item => (
                                <div className={cls.feauturesContainer} key={item.id}>
                                    <div className={cls.iconContainer}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h5>{item.title}</h5>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feautures