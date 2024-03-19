import "./footer.css";
import iconTwitter from "./../../Images/svg-icons/tw.svg";
import iconInstagram from "./../../Images/svg-icons/ins.svg";
import iconLinkedin from "./../../Images/svg-icons/lin.svg";
import iconFacebook from "./../../Images/svg-icons/fs.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container container__footer">
        <div className="footer__content">
          <div className="footer__text">
            <div className="footer__title">
              <div className="title__sub-title">FASHION</div>
              <div className="title__desc">
                Complete your style with awesome clothes from us.
              </div>
              <div className="title__links">
                <a href="#1">
                  <img src={iconFacebook} alt="" />
                </a>
                <a href="#1">
                  <img src={iconInstagram} alt="" />
                </a>
                <a href="#1">
                  <img src={iconTwitter} alt="" />
                </a>
                <a href="#1">
                  <img src={iconLinkedin} alt="" />
                </a>
              </div>
            </div>
            <div className="footer__desc">
              <div className="desc__link">
                Company
                <a href="">About</a>
                <a href="">Contact us</a>
                <a href="">Support</a>
                <a href="">Careers</a>
              </div>
              <div className="desc__link">
                Quick Link
                <a href="">Share Location</a>
                <a href="">Orders Tracking</a>
                <a href="">Size Guide</a>
                <a href="">FAQs</a>
              </div>
              <div className="desc__link">
                Legal
                <a href="">Terms & conditions</a>
                <a href="">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
