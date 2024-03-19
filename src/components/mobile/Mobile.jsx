import "./../mobile/mobile.css";
import socAppStore from "./../../Images/Brand-logo/app-store.png";
import socGoogle from "./../../Images/Brand-logo/google-play.png";
import mobileIphone from "./../../Images/vouchers-img.png";

const Mobile = () => {
  return (
    <section className="mobile">
      <div className="container container__mob">
        <div className="mobile__content">
          <div className="mobile__text"></div>
          <div className="mobile__title"> DOWNLOAD APP & GET THE VOUCHER!</div>
          <div className="mobile__desc">
            Get 30% off for first transaction using Rondovision mobile app for
            now.
          </div>
          <div className="social__img">
            <a href="#!">
              <img src={socAppStore} alt="AppStore..." className="socialImg" />
            </a>
            <a href="#!">
              <img src={socGoogle} alt="Google..." className="socialImg" />
            </a>
          </div>
        </div>
        <img src={mobileIphone} alt="" className="mobileImg" />
      </div>
    </section>
  );
};

export default Mobile;
