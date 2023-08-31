import { useState } from "react";
import style from "./JobPage.module.scss";
import { Input, Button } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import JobCard from "../../components/JobCard/JobCard";
import Paginations from "../../components/Pagination/Paginations";
import card from "../../storage/storage.json";

const JobPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const size = 5;
  const lastIndex = currentPage * size;
  const firstIndex = lastIndex - size;
  const currentCard = card.slice(firstIndex, lastIndex);

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

      <JobCard card={currentCard} />

      <Paginations card={card} size={size} setCurrentPage={setCurrentPage} />
    </>
  );
};

export default JobPage;
