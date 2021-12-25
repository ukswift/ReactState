import React from "react";
import { createContext, useState } from "react";

export const Contexts = createContext();

function DataContextProvider(props) {
  const [getConVal, setConVal] = useState([]);
  const [getKeyVal, setKeyVal] = useState([]);

  return (
    <Contexts.Provider value={{ getConVal, setConVal, getKeyVal, setKeyVal }}>
      {props.children}
    </Contexts.Provider>
  );
}

export default DataContextProvider;
