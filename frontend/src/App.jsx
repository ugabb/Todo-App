
import { useState, useEffect } from "react";

import api from "./Api/api";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [textTodo, setTextTodo] = useState("");
  const [btn, setBtn] = useState(true);
  const [filterTodo, setFilterTodo] = useState();

  const getAllTodos = async () => {
    const response = await api.get("/todos",{
      params:{
        completed: filterTodo
      }
    });
    setTodos(response.data.todo);
  };

  useEffect(() => {
    getAllTodos();
  }, [todos,filterTodo]);

  // create todo
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/todos", {
        text: textTodo,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    setTextTodo("");
  };

  // Completed state
  const handleCompleted = async (id) => {
    try {
      const response = await api.patch(`/todos/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  //delete todo
  const deleteTodo = async (id) => {
    try {
      const response = await api.delete(`todos/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilterValue = (option) => {
    console.log(option);
    setFilterTodo(option)
  };

  // create button only available when exist some text to send
  useEffect(() => {
    const btnAvailable = () => {
      if (textTodo) {
        return setBtn(false);
      } else {
        return setBtn(true);
      }
    };
    btnAvailable();
  }, [textTodo]);

  return (
    <div className="flex flex-col bg-VeryDarkBlue h-screen" id="nav-background">
      <Navbar />
      <div className="flex flex-col space-y-4 py-2 px-5 lg:w-1/2 lg:mx-auto">
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-start space-x-4 rounded p-4 bg-VeryDarkDesaturatedBlue"
        >
          <div className="w-5 h-5 rounded-full border"></div>
          <input
            type="text"
            className="bg-transparent focus:text-LightGrayishBlue text-sm focus:border-none w-screen "
            placeholder="Create a new Todo..."
            value={textTodo}
            onChange={(e) => setTextTodo(e.target.value)}
          />
          <button
            disabled={btn}
            type="submit"
            style={{ color: `${btn ? "hsl(233, 14%, 35%)" : "white"}` }}
            className="text-white"
          >
            Create
          </button>
        </form>
        <div className="flex-flex-col rounded bg-VeryDarkDesaturatedBlue">
          {/* // display todos */}
          {todos.map((todo) => (
            <Todo
              key={todo._id}
              id={todo._id}
              text={todo.text}
              completed={todo.completed}
              handleCompleted={handleCompleted}
              deleteTodo={deleteTodo}
            />
          ))}
          <div className="flex justify-between p-3 text-VeryDarkGrayishBlue">
            <p>{todos.length} items left</p>
            <p>Clear Completed</p>
          </div>
        </div>

        <Filter handleFilterValue={handleFilterValue} />
      </div>
    </div>
  );
}

export default App;
