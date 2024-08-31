import {  useRef } from "react";
import { MdAddToPhotos } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

function AddTodo({ }) {
  const contextObj = useContext(TodoItemsContext);
  const addNewItem =contextObj.addNewItem;
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    console.log(`${todoName} due on ${todoDate}`);
    addNewItem(todoName, todoDate);
  };
  return (
    <form className="row ajRow" onSubmit={handleAddButtonClicked}>
      <div className="col-6">
        <input
          type="text"
          ref={todoNameElement}
          placeholder="Enter Todo Here"
        />
      </div>

      <div className="col-4">
        <input type="date" ref={todoDateElement} />
      </div>

      <div className="col-2">
        <button
          // type="button"
          type="submit"
          className="btn btn-success"
          // onClick={handleAddButtonClicked}
        >
          <MdAddToPhotos />
        </button>
      </div>
    </form>
  );
}

export default AddTodo;
