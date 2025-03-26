import { useState, useEffect, useRef } from "react";
import { QuestionCard } from "../../components/QuestionCard/QuestionCard";
import { API_URL } from "../../constance/index.js";
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
      {questions.map((cards, index) => {
        return <QuestionCard card={cards} key={index} />;
      })}
    </>
  );
};
