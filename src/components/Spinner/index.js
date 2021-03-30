import cls from './Spinner.module.scss';

const Spinner = () => {
    return(
        <div className={cls.loadingSpinner}>
            <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Загрузка...</span>
            </div>
        </div>
    )
}

export default Spinner;