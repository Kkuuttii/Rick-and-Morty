import './Footer.css';
import siteLogo from '../../../images/siteLogo.png';
import linkedinLogo from '../../../images/linkedinLogo.png';
import gitHubLogo from '../../../images/gitHubLogo.png';
import gMailLogo from '../../../images/gMailLogo.png';

function Footer() {
    return (
        <div className="footer">
            <img src={siteLogo} alt="siteLogo" className="footer-logo"/>
            <div className="footer-nav">
                <h4>Get started</h4>
                <nav className='navigation-wrapper'>
                    <a href='/' className="nav-link">Home</a>
                    <a href='/library' className="nav-link">Library</a>
                    <a href='/quiz' className="nav-link">Quiz</a>
                </nav>
            </div>

            <div className="icon-wrapper">
                <a href='https://www.linkedin.com/in/ekaterina-gorelik-1752b41b4/' target="blank"> 
                    <img src={linkedinLogo} alt="siteLogo" className="contact-icon"/>
                </a>

                <a href='https://github.com/Kkuuttii' target="blank"> 
                    <img src={gitHubLogo} alt="siteLogo" className="contact-icon"/>
                </a>

                <a href='mailto:ekategorelik@gmail.com' target="blank"> 
                    <img src={gMailLogo} alt="siteLogo" className="contact-icon"/>
                </a>
            </div>
        </div>
    );
}
export default Footer;