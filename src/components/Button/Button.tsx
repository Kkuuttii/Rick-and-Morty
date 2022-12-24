import './Button.css';
import classNames from 'classnames';

interface IButton {
    text: string|number;
    className?: string; 
    onClick?: () => void;
}

function Button({text, className, onClick}: IButton) {
    return (
        <button className={classNames("standart-button", className)} onClick={()=>onClick?.()}>{text}</button>
    )
}
export default Button;