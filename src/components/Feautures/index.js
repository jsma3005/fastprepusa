import cls from './Feautures.module.scss';
import { AiFillSecurityScan } from 'react-icons/ai';
import { BiSupport } from 'react-icons/bi';
import { FaRegThumbsUp } from 'react-icons/fa'

const feauturesList = [
    {
        id: 1,
        icon: <AiFillSecurityScan />,
        title: 'Защита',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nisi optio quasi alias sequi, porro cupiditate adipisci tenetur quaerat neque? Tempore consectetur'
    },
    {
        id: 2,
        icon: <BiSupport />,
        title: 'Поддержка 24/7',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nisi optio quasi alias sequi, porro cupiditate adipisci tenetur quaerat neque? Tempore consectetur'
    },
    {
        id: 3,
        icon: <FaRegThumbsUp />,
        title: 'Качество',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nisi optio quasi alias sequi, porro cupiditate adipisci tenetur quaerat neque? Tempore consectetur'
    }
]

const Feautures = () => {
    return (
        <div className={cls.root}>
            <div className='row m-0'>
                <div className={`${cls.left} col-lg-5`}>
                </div>
                <div className={`${cls.right} col-lg-7`}>
                    <h1 className={cls.rightTitle}>Почему выбирают нас?</h1>
                    <div className={cls.line}></div>
                    <div>
                        {
                            feauturesList.map(item => (
                                <div className={cls.feauturesContainer} key={item.id}>
                                    <div>
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