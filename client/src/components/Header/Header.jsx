import style from "./Header.module.scss";
const Header = () => {
  return (
    <>
      <div className={style.headerWrapper}>
        <div className={style.headerLogo}></div>

        <nav>
          <p>Поиск Вакансий</p>
          <p>Избранное</p>
        </nav>
      </div>
    </>
  );
};

export default Header;
