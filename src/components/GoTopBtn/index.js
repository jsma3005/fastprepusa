import { HashLink } from "react-router-hash-link";
import { AiOutlineArrowUp } from 'react-icons/ai';
import cls from './GoTopBtn.module.scss';

const GoTopBtn = () => {
    return (
        <HashLink className={cls.root} to="/#navigation">
            <AiOutlineArrowUp className={cls.icon} />
        </HashLink>
    )
}

export default GoTopBtn