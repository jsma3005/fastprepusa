import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pricingRequest } from '../../redux/reducers/pricing';
import Title from '../Title';
import cls from './Pricing.module.scss';
import Spinner from '../Spinner';

const Pricing = () => {
    const dispatch = useDispatch();
    const {pricingData, pricingSuccess} = useSelector(s => s.pricing);

    useEffect(() => {
        dispatch(pricingRequest())
    }, [dispatch])

    console.log('PRICE =>', pricingData);
    console.log('PRICE SUCCESS =>', pricingSuccess);

    return (
        <div className={cls.root}>
            <Title subTitle='Наши цены' title='Тарифы по лучшим ценам' />
            <div className={cls.pricingContent}>
                <div className={cls.pricingSection}>

                    {
                        pricingSuccess ? (
                            pricingData.map(item => (
                                <div key={item.id}>
                                    <h1 className={cls.sectionTitle}>{item.name}</h1>
                                    <div className={cls.pricingList}>
                                        {
                                            item.data_tarifs.map(val => (
                                                <div key={val.id} className={cls.pricingCard + ' card'}>
                                                    <h5>{val.name}</h5>
                                                    <div className={cls.price}>
                                                        <p><span>$</span>{val.price}</p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        ) : pricingSuccess === false ? (
                            null
                        ) : (
                            <Spinner />
                        )
                    }

                    {/* <h1 className={cls.sectionTitle}>Поклейка FNSKU</h1>
                    <div className={cls.pricingList}>
                        <div className={cls.pricingCard + ' card'}>
                            <h5>Поклейка FNSKU over 1000 единиц</h5>
                            <div className={cls.price}>
                                <p><span>$</span>0.40</p>
                            </div>
                        </div>
                        <div className={cls.pricingCard + ' card'}>
                            <h5>Поклейка FNSKU 700-999 единиц</h5>
                            <div className={cls.price}>
                                <p><span>$</span>0.45</p>
                            </div>
                        </div>
                        <div className={cls.pricingCard + ' card'}>
                            <h5>Поклейка FNSKU 200-699 единиц</h5>
                            <div className={cls.price}>
                                <p><span>$</span>0.55</p>
                            </div>
                        </div>
                        <div className={cls.pricingCard + ' card'}>
                            <h5>Поклейка FNSKU 100-199 единиц</h5>
                            <div className={cls.price}>
                                <p><span>$</span>0.65</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Pricing