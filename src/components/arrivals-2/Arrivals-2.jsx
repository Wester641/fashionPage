// import Card from "../Card-2/Card2";
import Card from "./../Card/Card";
import "./arrivals-2.css";
import cat__cardImg from "./../../Images/01.jpeg";
import cat__card2Img from "./../../Images/02.jpeg";

const Arrivals2 = () => {
  return (
    <section className="arrivals2">
      <div className="container">
        <div className="arrivals2__header">
          <h2 className="title-3">Young’s Favourite</h2>
        </div>
        <div className="arrivals2__cards">
          <Card title="Trending on instagram" img={cat__cardImg} />
          <Card title="All Under $40" img={cat__card2Img} />
          {/* //Сюда добавляется карточки компонентов!! */}
        </div>
      </div>
    </section>
  );
};

export default Arrivals2;
