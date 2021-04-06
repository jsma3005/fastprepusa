import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pricingRequest } from '../../redux/reducers/pricing';
import Title from '../Title';
import cls from './Pricing.module.scss';
import Spinner from '../Spinner';

const Pricing = () => {
    const dispatch = useDispatch();
    const {pricingData, pricingSuccess} = useSelector(s => s.pricing);
    const {selectedLang: {pricing}, selectedLangSlug} = useSelector(s => s.langs);
    const [priceBtn, setPriceBtn] = useState(false);
    const [priceBtnLink, setPriceBtnLink] = useState(null);

    useEffect(() => {
        dispatch(pricingRequest())
        fetch('http://74.208.251.128/api/linkprice/')
        .then(res => res.json())
        .then(r => {
            setPriceBtnLink(r[0].linkprice);
            setPriceBtn(true)
        }).catch(() => {
            setPriceBtn(false)
        })
    }, [dispatch])

    return (
        <div className={cls.root} id="prices">
            <Title subTitle={pricing.subTitle} title={pricing.title} />
            <div className={cls.pricingContent}>
                <div className={cls.pricingSection}>

                    {
                        pricingSuccess ? (
                            <div className={`${cls.accordion}`} id="accordionContainer">
                                {
                                    selectedLangSlug === 'RU' ? (
                                        pricingData.map(({id, name_ru, data_tarifs}, i) => (
                                            <div key={id} className={cls.pricingContainer}>
                                                <div className={cls.pricingSectionTitle}>
                                                    <h2>{name_ru}</h2>
                                                </div>
                                                <table className="table table-hover table-striped">
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
                                        ))
                                    ) : (
                                        pricingData.map(({id, name_en, data_tarifs}, i) => (
                                            <div key={id} className={cls.pricingContainer}>
                                                <div className={cls.pricingSectionTitle}>
                                                    <h2>{name_en}</h2>
                                                </div>
                                                <table className="table table-hover table-striped">
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
                    {
                        priceBtn ? (
                            <div className={cls.pricingDownload}>
                                <a target="_blank" rel="noreferrer" href={priceBtnLink} className='btn'>{pricing.link}</a>
                            </div>
                        ) : null
                    }
                    
                </div>
            </div>
        </div>

    )
}

export default Pricing