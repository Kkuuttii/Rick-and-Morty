import './Button.css';
import classNames from 'classnames';

interface IButton {
    text: string | number | JSX.Element;
    className?: string; 
    onClick?: () => void;
}

function Button({text, className, onClick}: IButton) {
    return (
        <button className={classNames("standart-button rick-and-morty-font", className)} onClick={()=>onClick?.()}>{text}</button>
    )
}
export default Button;