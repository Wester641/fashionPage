import "./promo2.css";
import promo2Img from "./promo2.svg";

const Promo2 = () => {
  return (
    <section className="promo2">
      <div className="container2">
        <div className="promo2__content">
          <div className="promo2__text">
            <div className="promo2__title">
              <span className="highlight">
                <span>PAYDAY</span>
              </span>
              SALE NOW
            </div>
            <div className="promo2__desc">
              Spend minimal $100 get 30% off voucher code for your next purchase
              <br />
              <span>1 June - 10 June 2021</span>
              <br />
              *Terms & Conditions apply
            </div>
            <div className="promo2__btn-wrapper">
              <a href="#!" className="promo2__btn">
                Shop Now
              </a>
            </div>
          </div>
          <div className="promo2__img">
            <img src={promo2Img} alt="Kartinka" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo2;
