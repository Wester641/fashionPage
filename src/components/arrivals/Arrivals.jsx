import Card from "../Card/Card";
import "./arrivals.css";
import cat01Img from "./../../Images/cat-01.jpeg";
import cat02Img from "./../../Images/cat-02.jpeg";
import cat03Img from "./../../Images/cat-03.jpeg";

const Arrivals = () => {
  return (
    <section className="arrivals">
      <div className="container">
        <div className="arrivals__header">
          <h2 className="title-2">NEW ARRIVALS</h2>
        </div>
        <div className="arrivals__cards">
          <Card title="Hoodies & Sweetshirt" img={cat01Img} />
          <Card title="Coats & Parkas" img={cat02Img} />
          <Card title="Tees & T-Shirt" img={cat03Img} />
        </div>
      </div>
    </section>
  );
};

export default Arrivals;
