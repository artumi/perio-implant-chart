import Header from "./components/Header/Header.jsx";
import { ParadontalApp } from "./components/ParadontalApp.jsx";
import { useReactToPrint } from "react-to-print";
import React, { useRef, useState, useCallback } from "react";
import ChartsMenuTabs from "./components/ChartsMenuTabs.jsx";
import MenuTabButton from "./components/MenuTabButton.jsx";

const App = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  // const [selectedTopic, setSelectedTopic] = useState({
  //   value: "implants",
  // });

  const [selectedTopic, setSelectedTopic] = useState("implants");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <>
      <Header>
        <div id="printOut">
          <button onClick={handlePrint}>Print this out!</button>
        </div>
      </Header>
      <main>
        <ChartsMenuTabs
          buttonsContainer="menu"
          buttons={
            <>
              <MenuTabButton
                isSelected={selectedTopic === "implants"}
                onClick={() => handleSelect("implants")}
              >
                Implant Chart
              </MenuTabButton>
              <MenuTabButton
                isSelected={selectedTopic === "mucosa"}
                onClick={() => handleSelect("mucosa")}
              >
                Mucosa Chart
              </MenuTabButton>
            </>
          }
        ></ChartsMenuTabs>
        <ParadontalApp ref={componentRef} />
      </main>
    </>
  );
};

export default App;
