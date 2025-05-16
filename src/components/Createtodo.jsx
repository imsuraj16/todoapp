import React, { useState } from "react";
import { nanoid } from "nanoid";

const Createtodo = ({todo,settodo}) => {
  const [title, settitle] = useState("");

  const addTaskHandler = (e) => {
    e.preventDefault();
    settodo((prev)=>[...prev,{title:title,id:nanoid()}]);
    settitle("")
  };
  return (
    <>
      <form className="flex gap-10" onSubmit={addTaskHandler}>
        <input
          className="border-b border-gray-500 outline-none"
          type="text"
          placeholder="enter your task..."
          onChange={(e) => settitle(e.target.value)}
          value={title}
        />
        <button className="border-2 border-gray-600 px-4 py-1 rounded-lg">Add task</button>
      </form>
    </>
  );
};

export default Createtodo;
