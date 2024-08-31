import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

//reducer function
const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "new_item") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.dueDate },
    ];
  } else if (action.type === "delete_item") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, dueDate) => {
    const newItemAction = {
      type: "new_item",
      payload: {
        itemName,
        dueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "delete_item",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;
