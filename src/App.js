import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import React from 'react';
import Screen from './Containers/Screen/Screen';

import DataContextProvider from "./ContextAPI/Context";

function App() {
  return (
    <DataContextProvider>
      <div className="App">
        <Screen />
      </div >
    </DataContextProvider>
  );
}

export default App;
