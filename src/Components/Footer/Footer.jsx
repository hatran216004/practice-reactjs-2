import './Footer.scss';
import footer_logo from '../assets/logo_big.png';
import instagram_icon from '../assets/instagram_icon.png';
import pintester_icon from '../assets/pintester_icon.png';
import whatsapp_icon from '../assets/whatsapp_icon.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <div className="footer-logo">
                        <img src={footer_logo} alt="" />
                        <p>SHOPPER</p>
                    </div>
                    <ul className="footer-links">
                        <li>Company</li>
                        <li>Products</li>
                        <li>Offices</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    <div className="footer-socials-icon">
                        <div className="footer-icon-wapper">
                            <img src={instagram_icon} alt="Instagram" />
                        </div>
                        <div className="footer-icon-wapper">
                            <img src={pintester_icon} alt="Pintester" />
                        </div>
                        <div className="footer-icon-wapper">
                            <img src={whatsapp_icon} alt="Whatsapp" />
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <p>Copyright ©2024 webdesign.gdn All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
