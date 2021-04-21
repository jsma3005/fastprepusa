import cls from './Title.module.scss';

const Title = ({subTitle = '', title = '', text = ''}) => {
    return (
        <div className={cls.root}>
            <div className={cls.titleContent}>
                <h5>{subTitle}</h5>
                <h1>{title}</h1>
                <p>{text}</p>
                <div className={cls.line}></div>
            </div>
        </div>
    )
}

export default Title;