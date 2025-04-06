import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch.js";
// import cls from "./EditQuestionPage.module.jsx";
import { useEffect, useState } from "react";
import { API_URL } from "../../constance";
import { Loader } from "../../components/Loader";
import { EditQuestion } from "./EditQuestion.jsx";

export const EditQuestionPage = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);

  const [fetchQuestion, isQuestionLoading] = useFetch(async () => {
    const response = await fetch(`${API_URL}/react/${id}`);
    const data = await response.json();

    setQuestion(data);
  });

  useEffect(() => {
    fetchQuestion();
  }, []);

  return (
    <div>
      {isQuestionLoading && <Loader />}

      {question && <EditQuestion initialState={question} />}
    </div>
  );
};

export default EditQuestionPage
