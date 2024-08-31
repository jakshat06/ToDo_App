import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

const TodoItems = () => {
  // const contextObj = useContext(TodoItemsContext);
  // const todoItems = contextObj.todoitems;
  const {todoItems} =useContext(TodoItemsContext);

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
        ></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
