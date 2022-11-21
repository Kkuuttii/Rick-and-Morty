import './Button.css';
import classNames from 'classnames';

interface IButton {
    className?: string; 
}

function Button({className}: IButton) {
    return (
        <button className={classNames("standart-button", className)}>text</button>
    )
}
export default Button;