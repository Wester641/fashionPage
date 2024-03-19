import "./../footer2/footer2.css";

const Footer2 = () => {
  return (
    <section className="footer2">
      <div className="container container__footer2">
        <div className="footer2__content">
          <div className="footer2__text">
            <div className="footer2__title">
              JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
            </div>
            <div className="footer2__desc">
              Type your email down below and be young wild generation
            </div>
          </div>
          <div className="footer2__input">
            <input
              type="text"
              className="input"
              placeholder="Add your email here"
            />
            <button className="input__btn">SEND</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer2;
