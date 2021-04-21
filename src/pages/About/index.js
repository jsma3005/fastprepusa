import cls from './About.module.scss';
import AboutContent from '../../assets/about-content.jpg';
import Tilt from 'react-tilt';
import Services from '../../components/Services';
import { useSelector } from 'react-redux';

const About = () => {
    const {selectedLang: {about}} = useSelector(s => s.langs);
    
    return (
        <div className={cls.root}>
            <div className={cls.head}>
                <div className={cls.content}>
                    <h5>{about.subTitle}</h5>
                    <h1 className={cls.title}>{about.title}</h1>
                    <div className={cls.line}></div>
                </div>
            </div>
            <section className={cls.about}>
                <div className={`${cls.aboutRow} row m-0 align-items-center`}>
                    <div className={cls.aboutLeft + ' col-lg-6'}>
                        <div className={cls.aboutTitle}>
                            <h1>{about.we}</h1>
                            <div className={cls.line}></div>
                        </div>
                        <p>{about.text1}</p>
                        <br />
                        <p>{about.text2}</p>
                        <p>{about.text3}</p>
                        <p>{about.statisticList.title}</p>
                        <ul className={cls.statisticList}>
                            <li>
                                {about.statisticList.list1}
                            </li>
                            <li>
                                {about.statisticList.list2}
                            </li>
                            <li>
                                {about.statisticList.list3}
                            </li>
                        </ul>
                        <p>{about.statisticList.by}</p>
                    </div>
                    <div className={cls.aboutRight + ' col-lg-6'}>
                        <img src={AboutContent} alt='About content' />
                    </div>
                </div>
                <div className={cls.misson}>
                    <Tilt className={cls.tilt}>
                        <div className={cls.missionLeft}>
                            <h1>{about.ourMission}</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend semper molestie. Etiam urna turpis, eleifend molestie aliquet in, interdum sed est. Pellentesque porta neque eget lacinia accumsan. Ut a blandit dolor.</p>
                        </div>
                    </Tilt>
                    <Tilt className={cls.tilt}>
                        <div className={cls.missionRight}>
                            <h1>{about.ourGoal}</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend semper molestie. Etiam urna turpis, eleifend molestie aliquet in, interdum sed est. Pellentesque porta neque eget lacinia accumsan. Ut a blandit dolor.</p>
                        </div>
                    </Tilt>
                </div>
            </section>
            <Services />
        </div>
    )
}

export default About