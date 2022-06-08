import Image from "next/image";

import styles from "./styles/header.module.scss";

interface IHeaderProps {
  title?: string;
}

const Header = ({ title = "JavaScript Flip Cards" }: IHeaderProps) => {
  return (
    <header className={styles.siteHeader}>
      <div className={styles.titleContainer}>
        <h1>{title}</h1>
      </div>
      <div className={styles.jsLogoContainer}>
        <Image src="/jsLogo.svg" alt="JavaScript Logo" width={50} height={50} />
      </div>
    </header>
  );
};

export default Header;
