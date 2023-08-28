// import style from "./App.module.scss";
import { Route, Routes } from "react-router-dom";
import JobPage from "./Pages/JobPage/JobPage";
import VacancyPage from "./Pages/VacancyPage/VacancyPage";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<JobPage />} />
        <Route path={"/vacancy/:id"} element={<VacancyPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
