import React from "react";
import { toast } from "react-toastify";

const Addtodo = ({ todo, settodo }) => {
  const deleteHandler = (id) => {
    let newtodo = todo.filter((item) => item.id !== id);
    settodo(newtodo);
    toast.error("todo deleted!");
  };
  return (
    <div className="flex flex-col gap-5">
      {todo.map((todo) => (
        <div
          key={todo.id}
          className="flex gap-5 bg-gray-300 px-3 py-2 justify-between rounded-lg"
        >
          <h1>{todo.title}</h1>
          <button
            className="text-red-400 "
            onClick={() => deleteHandler(todo.id)}
          >
            Delete task
          </button>
        </div>
      ))}
    </div>
  );
};

export default Addtodo;
