import styles from "./Card.module.css";
import arrowImg from "./../../Images/logo-svg/Arrow 1.svg";

const Card = ({ title, img }) => {
  return (
    <article className={styles.card}>
      <img src={img} alt="Categories ..." className={styles.card__img} />
      <div className={styles.card__body}>
        <div className={styles.card__text}>
          <div className={styles.card__title}>{title}</div>
          <div className={styles.card__muted}>Explore Now!</div>
        </div>
        <div className={styles.card__icon}>
          <img src={arrowImg} alt="Open" />
        </div>
      </div>
    </article>
  );
};

export default Card;
