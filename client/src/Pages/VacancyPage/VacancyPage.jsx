import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./VacancyPage.module.scss";
import storage from "../../storage/storage.json";
import Header from "../../components/Header/Header";

const VacancyPage = () => {
  const { id } = useParams();
  const [cardInfo, setCardInfo] = useState({});

  function filtered() {
    const res = storage.filter((cardInfo) => cardInfo.id == id);

    setCardInfo(res[0]);
  }

  useEffect(() => {
    filtered();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />

      <div className={style.cardWrapper}>
        <h2>{cardInfo.header}</h2>

        <div className={style.cardDescription}>
          <p>{cardInfo.salary}</p>
          <div>{cardInfo.time}</div>
        </div>

        <div className={style.cardLocation}>
          <div className={style.geoIcon}></div>
          <p>{cardInfo.city}</p>
        </div>
      </div>

      <div className={style.cardRequirementsWrapper}>
        <div className={style.responsibilities}>
          <h2>Обязанности:</h2>
          <ul>
            {cardInfo.responsibilities
              ? cardInfo.responsibilities.map((el, index) => <li key={index}>{el}</li>)
              : null}
          </ul>
        </div>

        <div className={style.requirements}>
          <h2>Требования:</h2>
          <ul>
            {cardInfo.requirements
              ? cardInfo.requirements.map((el, index) => <li key={index}>{el}</li>)
              : null}
          </ul>
        </div>

        <div className={style.conditions}>
          <h2>Условия:</h2>
          <ul>
            {cardInfo.conditions
              ? cardInfo.conditions.map((el, index) => <li key={index}>{el}</li>)
              : null}
          </ul>
        </div>
      </div>
    </>
  );
};

export default VacancyPage;
