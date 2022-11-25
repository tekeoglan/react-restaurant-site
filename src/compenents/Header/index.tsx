import styles from "./Header.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { ReactComponent as BagIcon } from "../../assets/bag.svg";
import { ReactComponent as PersonIcon } from "../../assets/person.svg";
import { useRef, useEffect, MouseEventHandler } from "react";

function Header() {
  const list = useRef<HTMLUListElement | null>(null);
  const selectedLi = useRef<HTMLElement | null>(null);

  const navHandler: MouseEventHandler<HTMLLIElement> = (e) => {
    if (e.currentTarget.dataset.underline === "active") return;
    selectedLi.current.dataset.underline = "deactive";
    selectedLi.current = e.currentTarget;
    e.currentTarget.dataset.underline = "active";
  };

  useEffect(() => {
    if (!list.current) return;
    const li = list.current.firstChild as HTMLElement;
    li.dataset.underline = "active";
    selectedLi.current = li;
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <h1>EatFood</h1>
      </div>
      <nav className={styles.headerMiddle}>
        <ul ref={list}>
          <li onClick={navHandler}>
            <a>products</a>
          </li>
          <li onClick={navHandler}>
            <a>story</a>
          </li>
          <li onClick={navHandler}>
            <a>manufacturing</a>
          </li>
          <li onClick={navHandler}>
            <a>packaging</a>
          </li>
          <li onClick={navHandler}>
            <a>team</a>
          </li>
        </ul>
      </nav>
      <div className={styles.headerRight}>
        <ul>
          <li>
            <SearchIcon />
          </li>
          <li>
            <BagIcon />
          </li>
          <li>
            <PersonIcon />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
