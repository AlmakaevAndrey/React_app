import { useNavigate, useParams } from "react-router-dom";
import { Badge } from "../../components/Badge";
import { Button } from "../../components/Button";
import cls from "./QuestionPage.module.css";
import { useEffect, useId, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../constance";
import { Loader, SmallLoader } from "../../components/Loader";
import { useAuth } from "../../hooks/useAuth";

export const QuestionPage = () => {
  const checkboxId = useId();
  const navigate = useNavigate();
  const { id } = useParams();
  const { isAuth } = useAuth();

  const [card, setCard] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const levelVariant = () => (card.level === 1 ? "primary" : card.level === 2 ? "warning" : "alert");
  const completedVariant = () => (card.completed ? "success" : "primary");

  const [fetchCard, isCardLoading] = useFetch(async () => {
    const response = await fetch(`${API_URL}/react/${id}`);
    const data = await response.json();

    setCard(data);
  });

  const [updateCard, isCardUpdating] = useFetch(async (isChecked) => {
    const response = await fetch(`${API_URL}/react/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ completed: isChecked }),
    });
    const data = await response.json();

    setCard(data);
  });

  useEffect(() => {
    fetchCard();
  }, []);

  useEffect(() => {
    card !== null && setIsChecked(card.completed);
  }, [card]);

  const onCheckboxHandler = () => {
    setIsChecked(!isChecked);
    updateCard(!isChecked).catch(console.error);
  };

  return (
    <>
      {isCardLoading && <Loader />}

      {card !== null && (
        <div className={cls.container}>
          <div className={cls.cardLabels}>
            <Badge variant={levelVariant()}>level: {card.level}</Badge>
            <Badge variant={completedVariant()}>{card.completed ? "Completed" : "Not Completed"}</Badge>

            {card?.editDate && <p className={cls.editDate}>Edited: {card.editDate}</p>}
          </div>

          <h5 className={cls.cardTitle}>{card.question}</h5>
          <p className={cls.cardDescription}>{card.description}</p>

          <div className={cls.cardAnswers}>
            <label>short answer: </label>
            <p className={cls.cardAnswer}>{card.answer}</p>
          </div>

          <ul className={cls.cardLinks}>
            Resources:
            {card.resources.map((link, index) => {
              return (
                <li key={index}>
                  <a href={link.trim()} target="_blank" rel="noreferrer">
                    {link.trim()}
                  </a>
                </li>
              );
            })}
          </ul>

          <label htmlFor={checkboxId} className={cls.cardCheckbox}>
            <input
              type="checkbox"
              id={checkboxId}
              className={cls.checkbox}
              checked={isChecked}
              onChange={onCheckboxHandler}
              disabled={isCardUpdating}
            />
            <span>mark question as completed</span>

            {isCardUpdating && <SmallLoader />}
          </label>

          {isAuth && (
            <Button onClick={() => navigate(`/editquestion/${card.id}`)} isDisabled={isCardUpdating}>
              Edit Question
            </Button>
          )}
          <Button onClick={() => navigate("/")} isDisabled={isCardUpdating}>
            Back
          </Button>
        </div>
      )}
    </>
  );
};
