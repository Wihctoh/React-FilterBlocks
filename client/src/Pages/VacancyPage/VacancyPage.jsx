import { useParams } from "react-router-dom";

const VacancyPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default VacancyPage;
