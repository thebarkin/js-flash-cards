import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles/flipcard.module.scss";

interface IFlipCardProps {
  question?: string;
  answer?: string;
  sourceLink?: string;
}

export const FlipCard = ({ question, answer, sourceLink }: IFlipCardProps) => {
  const [isShowAnswer, setIsShowAnswer] = useState<boolean>(false);

  const handleShowAnswer = (): void => {
    if (isShowAnswer) {
      location.reload();
    }
    setIsShowAnswer(!isShowAnswer);
  };

  return (
    <>
      <div className={styles.container}>
        <div
          className={`${styles.card} ${isShowAnswer ? styles.showAnswer : ""}`}
        >
          <div className={styles.side}>
            <h2>{question}</h2>
          </div>
          <div className={`${styles.side} ${styles.back}`}>
            <div className={styles.content}>
              <p>{answer}</p>
              <div className={styles.sourceContainer}>
                <a href={sourceLink} rel="noreferrer" target="_blank">
                  Source <FontAwesomeIcon icon={faSquareArrowUpRight} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.answerButton} onClick={handleShowAnswer}>
        {!isShowAnswer ? "Show Answer" : "Next Question"}
      </button>
    </>
  );
};
