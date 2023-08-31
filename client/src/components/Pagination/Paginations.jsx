import { Pagination } from "@mantine/core";

const Paginations = ({ card, size, setCurrentPage }) => {
  return (
    <>
      <Pagination
        total={Math.ceil(card.length / size)}
        position="center"
        style={{ marginTop: "40px" }}
        onChange={(card) => setCurrentPage(card)}
      />
    </>
  );
};

export default Paginations;
