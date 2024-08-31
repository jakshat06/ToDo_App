import AppName from "./componrnts/AppName";
import AddTodo from "./componrnts/AddTodo";
import TodoItems from "./componrnts/TodoItems";
import WelcomeMessage from "./componrnts/WelcomeMessage";
import "./App.css";
import  TodoItemsContextProvider  from "./store/todo-items-store";
 
function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-cotainer">
        <AppName></AppName>

        <div className="container text-center">
          <AddTodo></AddTodo>
          <WelcomeMessage></WelcomeMessage>
          <TodoItems></TodoItems>
        </div>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
