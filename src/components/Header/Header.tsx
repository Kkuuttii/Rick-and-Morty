import './Header.css';
import logo from "../../images/logo.png"
import Button from '../Button/Button';

function Header() {
    return (
        <div className='header'>
            <div>
                <img src={logo} alt="Main Page" className='logo'/>
            </div>
            <div>
                <Button className='header-button'/>
            </div>
        </div>
    )
}
export default Header;