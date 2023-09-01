import { Route, Routes } from "react-router-dom";
import JobPage from "./Pages/JobPage/JobPage";
import VacancyPage from "./Pages/VacancyPage/VacancyPage";
import Favorite from "./Pages/Favorite/Favorite";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<JobPage />} />
        <Route path={"/vacancy/:id"} element={<VacancyPage />}></Route>
        <Route path={"/favorite"} element={<Favorite />} />
      </Routes>
    </>
  );
}

export default App;
