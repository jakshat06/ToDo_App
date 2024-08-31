import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

function TodoItem({ todoName, todoDate }) {
  const ContextObj = useContext(TodoItemsContext);
  const deleteItem = ContextObj.deleteItem;
  return (
    <div className="row ajRow">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => deleteItem(todoName)}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}
export default TodoItem;
