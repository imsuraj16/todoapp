import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { todoContext } from "../context/Context";

const Createtodo = () => {

  const [todo,settodo] = useContext(todoContext)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const addTaskHandler = (data) => {
    data.id = nanoid();
    settodo((prev) => [...prev, data]);
    reset();
    toast.success("todo created!");
  };
  // console.log(errors);

  return (
    <>
      <form onSubmit={handleSubmit(addTaskHandler)}>
        <input
          className="border-b border-gray-500 outline-none"
          type="text"
          placeholder="enter your task..."
          {...register("title", { required: "title cannot be empty.." })}
        />
        <h1 className="text-red-500">{errors?.title?.message}</h1>
        <br />
        <button className="border-2 border-gray-600 px-4 py-1 rounded-lg w-fit">
          Add task
        </button>
      </form>
    </>
  );
};

export default Createtodo;
