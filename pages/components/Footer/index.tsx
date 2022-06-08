import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles/footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.siteFooter}>
      <p>
        Personal project to help me prepare for JavaScript Developer jobs. Hope
        you find it useful and good luck!
      </p>
      <p>
        <strong className={styles.name}>Built by Richard Barkinskiy</strong>
      </p>
      <p>
        <a
          className={styles.githubLink}
          href="https://github.com/thebarkin"
          rel="noreferrer"
          target="_blank"
        >
          GitHub <FontAwesomeIcon icon={faSquareArrowUpRight} />
        </a>
      </p>
    </footer>
  );
};
