import React, { createContext, useState } from "react";

export const todoContext = createContext(null);

const Context = (props) => {
  const [todo, settodo] = useState([]);

  return (
    <>
      <todoContext.Provider value={[todo, settodo]}>
        {props.children}
      </todoContext.Provider>
    </>
  );
};

export default Context;
