import {} from "react";

const items = [
  {
    task: "Learn React",
    icon: "😘",
    isCompleted: true,
  },
  {
    task: "Strengthen your knowledge of the JavaScript",
    icon: "😘",
    isCompleted: true,
  },
  {
    task: "Don`t forget learn English",
    icon: "😘",
    isCompleted: false,
  },
];

export const List = () => {
  return (
    <div>
      {items.map((item, index) => {
        return (
          <section key={index} className={item.isCompleted ? "completed" : ""}>
            <span>{item.icon}</span>
            <h4>{item.task}</h4>
          </section>
        );
      })}
    </div>
  );
};
