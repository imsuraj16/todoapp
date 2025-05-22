import React, { useState } from "react";
import Createtodo from "./components/Createtodo";
import Addtodo from "./components/Addtodo";

const App = () => {
  
 

  return (
    <div className="w-full h-full px-[10rem] py-[10rem] flex gap-[7rem]">
      <div className="w-[50%] h-full flex flex-col gap-10">
        <h1 className="font-extralight text-[5rem] leading-tight">
          Set <span className="text-red-400">Reminders</span> for tasks
        </h1>
        <Createtodo/>
      </div>
      <div className="w-[50%] h-full flex flex-col gap-5">
        <h1 className="font-extralight text-[5rem]"><span className="text-pink-400">Pending</span>Todos</h1>
        <Addtodo/>
      </div>
    </div>
  );
};

export default App;
