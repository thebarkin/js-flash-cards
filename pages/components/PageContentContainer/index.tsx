import React from "react";

import styles from "./styles/container.module.scss";

interface IPageContentContainerProps {
  children: React.ReactNode;
}

const PageContentContainer = ({ children }: IPageContentContainerProps) => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>{children}</div>
    </section>
  );
};

export default PageContentContainer;
