import './Header.css';
import logo from "../../images/logo.png";
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    return (
        <div className='header' >
            <div>
                <img src={logo} alt="Main Page" className='logo'onClick={()=>navigate('/')}/>
            </div>
            <div>
                <Button text ='About' className='header-button' onClick={()=>navigate('/about')}/>
            </div>
        </div>
    )
}
export default Header;