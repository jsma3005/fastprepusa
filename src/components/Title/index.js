import cls from './Title.module.scss';

const Title = ({subTitle = '', title = ''}) => {
    return (
        <div className={cls.root}>
            <div className={cls.titleContent}>
                <h5>{subTitle}</h5>
                <h1>{title}</h1>
                <div className={cls.line}></div>
            </div>
        </div>
    )
}

export default Title;