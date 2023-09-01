import style from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className={style.headerWrapper}>
        <div className={style.headerLogo}></div>

        <nav>
          <Link to={"/"}>
            <p>Поиск Вакансий</p>
          </Link>
          <Link to={"/favorite"}>
            <p>Избранное</p>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
