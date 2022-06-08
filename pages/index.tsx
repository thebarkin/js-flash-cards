import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { Header } from "./components/Header";
import { PageContentContainer } from "./components/PageContentContainer";
import { PageIntroCopy } from "./components/PageIntroCopy";
import { FlipCard } from "./components/FlipCard";
import { Footer } from "./components/Footer";
import questions from "../data/questions.json";

const Home: NextPage = () => {
  const { Items: jsQuestions } = questions;

  interface qaItem {
    id: string;
    question: string;
    answer: string;
    sourceLink: string;
  }

  const [questionsAndAnswers, setQuestionsAndAnswers] = useState<qaItem>({
    id: "",
    question: "",
    answer: "",
    sourceLink: "",
  });

  useEffect(() => {
    const getRandomObjectFromArray = (itemsArray: qaItem[]): qaItem => {
      const item = itemsArray[Math.floor(Math.random() * itemsArray.length)];
      return item;
    };
    const randomQuestionAndAnswer = getRandomObjectFromArray(jsQuestions);
    setQuestionsAndAnswers(randomQuestionAndAnswer);
  }, [jsQuestions]);

  return (
    <>
      <Head>
        <title>JavaScript Flash Cards</title>
        <link rel="icon" href="/js.ico" />
      </Head>
      <Header />
      <PageContentContainer>
        <PageIntroCopy />
        {questionsAndAnswers && (
          <FlipCard
            question={questionsAndAnswers.question}
            answer={questionsAndAnswers.answer}
            sourceLink={questionsAndAnswers.sourceLink}
          />
        )}
      </PageContentContainer>
      <Footer />
    </>
  );
};

export default Home;
