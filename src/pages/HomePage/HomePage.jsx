import { useState, useEffect, useRef } from "react";
import { QuestionCardList } from "../../components/QuestionCardList";
import { API_URL } from "../../constance";
import { Loader } from "../../components/Loader";
// import cls from "./HomePage.module.css";

export const HomePage = () => {
  const [questions, setQuestions] = useState([]);
  const isFirstRender = useRef(true);

  const getQuestions = async () => {
    try {
      const response = await fetch(`${API_URL}/react`);
      const questions = await response.json();

      setQuestions(questions);

      if (isFirstRender.current) {
        console.log("questions", questions);
        isFirstRender.current = false;
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <>
      <Loader />
      <QuestionCardList cards={questions} />
    </>
  );
};
