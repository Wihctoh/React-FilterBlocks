import { useState } from "react";
import style from "./JobPage.module.scss";
import { Input, Button, Select, Pagination } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import JobCard from "../../components/JobCard/JobCard";
import card from "../../storage/storage.json";
import Header from "../../components/Header/Header";

const JobPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [size, setSize] = useState(2);

  const lastIndex = currentPage * size;
  const firstIndex = lastIndex - size;
  const currentCard = card.slice(firstIndex, lastIndex);

  return (
    <>
      <Header />

      <div className={style.wrapper}>
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

        <div className={style.paginationWrapper}>
          <Pagination
            total={Math.ceil(card.length / size)}
            position="center"
            onChange={(card) => setCurrentPage(card)}
          />

          <Select
            data={[
              { value: "2", label: "2" },
              { value: "5", label: "5" },
              { value: "10", label: "10" },
              { value: "20", label: "20" },
              { value: `${card.length}`, label: "Все" },
            ]}
            style={{ width: "10%" }}
            onChange={(e) => setSize(e)}
          />
        </div>
      </div>
    </>
  );
};

export default JobPage;
