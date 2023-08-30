import { useState } from "react";
import style from "./JobPage.module.scss";
import { Input, Button } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import JobCard from "../../components/JobCard/JobCard";
import Paginations from "../../components/Pagination/Paginations";

const JobPage = () => {
  const cardsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);

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

  const lastIndex = cardsPerPage * currentPage;
  const firstIndex = lastIndex - cardsPerPage;
  const currentCards = card.slice(firstIndex, lastIndex);

  const page = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Input
        size="lg"
        placeholder="Введите название вакансии"
        icon={<IconSearch />}
        rightSectionWidth={100}
        rightSection={
          <Button
            className={style.searchBtn}
            size="xs"
            variant="gradient"
            gradient={{ from: "teal", to: "blue", deg: 60 }}
          >
            Поиск
          </Button>
        }
      />

      <JobCard card={currentCards} />

      <Paginations card={card} cardsPerPage={cardsPerPage} page={page} />
    </>
  );
};

export default JobPage;
