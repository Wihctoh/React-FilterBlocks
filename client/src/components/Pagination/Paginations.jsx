import { Pagination } from "@mantine/core";

const Paginations = ({ card, cardsPerPage, page }) => {
  // const total = [];

  // for (let i = 1; i <= Math.ceil(card.length / cardsPerPage); i++) {
  //   total.push(i);
  // }

  return (
    <>
      <Pagination
        total={Math.ceil(card.length / cardsPerPage)}
        position="center"
        style={{ marginTop: "40px" }}
        onChange={() => page(cardsPerPage)}
      />
      {/* {total.map((el, index) => (
        <div className="wrapper" key={index} onClick={() => page(el)}>
          <p>{el}</p>
        </div>
      ))} */}
    </>
  );
};

export default Paginations;
