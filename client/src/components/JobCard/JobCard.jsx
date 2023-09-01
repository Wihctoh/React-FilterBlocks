import { Link } from "react-router-dom";
import style from "./JobCard.module.scss";

const JobCard = ({ card }) => {
  return (
    <>
      <div className={style.wrapper}>
        {card.map((el, index) => (
          <Link to={`/vacancy/${el.id}`} key={index}>
            <div className={style.cardWrapper}>
              <h2>{el.header}</h2>

              <div className={style.cardDescription}>
                <p>{el.salary}</p>
                <div>{el.time}</div>
              </div>

              <div className={style.cardLocation}>
                <div className={style.geoIcon}></div>
                <p>{el.city}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default JobCard;
