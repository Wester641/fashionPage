import "./brands.css";
import hm from "./../../Images/Brand-logo/HM.png";
import obey from "./../../Images/Brand-logo/Obey.png";
import shopify from "./../../Images/Brand-logo/Shopify.png";
import lacoste from "./../../Images/Brand-logo/Lacoste.png";
import levis from "./../../Images/Brand-logo/Levis.png";
import amazon from "./../../Images/Brand-logo/Amazon.png";

const Brands = () => {
  return (
    <section className="brands">
      <div className="container">
        <ul className="brands__list">
          <li>
            <a href="">
              <img src={hm} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={obey} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={shopify} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={lacoste} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={levis} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={amazon} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Brands;
