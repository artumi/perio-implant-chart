import Header from "./components/Header/Header.jsx";
import { ParadontalApp } from "./components/ParadontalApp.jsx";
import { useReactToPrint } from "react-to-print";
import React, { useRef } from "react";

const App = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <Header>
        <div id="printOut">
          <button onClick={handlePrint}>Print this out!</button>
        </div>
      </Header>
      <main>
        <ParadontalApp ref={componentRef} />
      </main>
    </>
  );
};

export default App;
