import style from "./JobPage.module.scss";
import { Input, Button } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const JobPage = () => {
  const card = [
    {
      header: "Менеджер-дизайнер",
      salary: "з/п от 70000 rub",
      city: "Новый Уренгой",
      time: "Полный рабочий день",
    },
    {
      header: "Ведущий графический дизайнер НЕ УДАЛЕННО",
      salary: "з/п от 80000 rub",
      city: "Москва",
      time: "Полный рабочий день",
    },
    {
      header: "Работник декорации, дизайнер (ТЦ Амбар)",
      salary: "з/п 29000 rub",
      city: "Самара",
      time: "Сменный график работы",
    },
    {
      header: "Менеджер-дизайнер",
      salary: "з/п 55000 - 95000 rub",
      city: "Тюмень",
      time: "Полный рабочий день",
    },
  ];

  return (
    <div>
      <Input
        placeholder="Введите название вакансии"
        icon={<IconSearch />}
        rightSection={
          <Button
            className={style.btn}
            size="xs"
            variant="gradient"
            gradient={{ from: "teal", to: "blue", deg: 60 }}
          >
            Поиск
          </Button>
        }
      />

      {card.map((el, index) => (
        <Link to={`/vacancy/${el.header}`} key={index}>
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
  );
};

export default JobPage;
