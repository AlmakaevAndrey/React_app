import { useState, useEffect, useRef } from "react";
import { QuestionCardList } from "../../components/QuestionCardList";
import { API_URL } from "../../constance";
import { Loader } from "../../components/Loader";
import { useFetch } from "../../hooks/useFetch";
// import cls from "./HomePage.module.css";

export const HomePage = () => {
  const [questions, setQuestions] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const [getQuestions, isLoading, error] = useFetch(async (url) => {
    const response = await fetch(`${API_URL}/${url}`);
    const questions = await response.json();

    setQuestions(questions);
    return questions;
  });

  useEffect(() => {
    getQuestions("react");
  }, []);

  const onSearchValueHandler = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  return (
    <>
      <input type="text" value={searchValue} onChange={onSearchValueHandler} />

      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <QuestionCardList cards={questions} />
    </>
  );
};
