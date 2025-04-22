import styles from "../styles/component.module.css";
import ButtonImg from "./ButtonImg";

const SideBar = () => {
  return (
    <nav className={styles.sideBar}>
      <h1 className={styles.logo}>Logo</h1>
      <ButtonImg
        className={styles.openMenu}
        src="./svgrepo/menu-svgrepo-com.svg"
        alt="open menu"
        width="32px"
        height="32px"
      />
    </nav>
  );
};

export default SideBar;
