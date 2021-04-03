import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pricingRequest } from '../../redux/reducers/pricing';
import Title from '../Title';
import cls from './Pricing.module.scss';
import Spinner from '../Spinner';

const Pricing = () => {
    const dispatch = useDispatch();
    const {pricingData, pricingSuccess} = useSelector(s => s.pricing);
    const {selectedLang: {pricing}, selectedLangSlug} = useSelector(s => s.langs);

    useEffect(() => {
        dispatch(pricingRequest())
    }, [dispatch])

    return (
        <div className={cls.root} id="prices">
            <Title subTitle={pricing.subTitle} title={pricing.title} />
            <div className={cls.pricingContent}>
                <div className={cls.pricingSection}>

                    {
                        pricingSuccess ? (
                            <div className={`${cls.accordion} accordion accordion-flush`} id="accordionContainer">
                                {
                                    selectedLangSlug === 'RU' ? (
                                        pricingData.map(({id, name_ru, data_tarifs}, i) => (
                                            <div key={id} className='accordion-item'>
                                                <h2 className="accordion-header" id={`flush-heading-${i}`}>
                                                    <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-${i}`} aria-expanded="false" aria-controls="flush-collapseOne">
                                                        <span className={cls.productSectionTitle}>{name_ru}</span>
                                                    </button>
                                                </h2>
                                                <div id={`flush-collapse-${i}`} className={`accordion-collapse collapse ${i === 0 ? 'show' : null }`} aria-labelledby={`flush-heading-${i}`} data-bs-parent="#accordionContainer">
                                                    <div className="accordion-body">
                                                        <table className="table table-hover">
                                                            <tbody>
                                                                {
                                                                    data_tarifs.map((item) => (
                                                                        <tr className='text' key={item.id}>
                                                                            <td><span className={cls.productTitle}>{item.name_ru}</span></td>
                                                                            <td className={cls.productPrice}>{item.price_ru}</td>
                                                                        </tr>
                                                                    ))
                                                                }
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        pricingData.map(({id, name_en, data_tarifs}, i) => (
                                            <div key={id} className='accordion-item'>
                                                <h2 className="accordion-header" id={`flush-heading-${i}`}>
                                                    <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-${i}`} aria-expanded="false" aria-controls="flush-collapseOne">
                                                        <span className={cls.productSectionTitle}>{name_en}</span>
                                                    </button>
                                                </h2>
                                                <div id={`flush-collapse-${i}`} className={`accordion-collapse collapse ${i === 0 ? 'show' : null }`} aria-labelledby={`flush-heading-${i}`} data-bs-parent="#accordionContainer">
                                                    <div className="accordion-body">
                                                        <table className="table table-hover">
                                                            <tbody>
                                                                {
                                                                    data_tarifs.map((item) => (
                                                                        <tr className='text' key={item.id}>
                                                                            <td><span className={cls.productTitle}>{item.name_en}</span></td>
                                                                            <td className={cls.productPrice}>{item.price_en}</td>
                                                                        </tr>
                                                                    ))
                                                                }
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )
                                    
                                }
                            </div>
                        ) : pricingSuccess === false ? (
                            null
                        ) : (
                            <Spinner />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Pricing