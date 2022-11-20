import './Header.css';
import logo from "../../images/logo.png"

function Header() {
    return (
        <div className='header'>
            <div>
                <img src={logo} alt="Main Page" />
            </div>
            <div>
                <button>About</button>
            </div>
        </div>
    )
}
export default Header;