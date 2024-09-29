import React, { useState } from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import Entries from "./components/Entries";

function App() {
  const [pickNumbers, setPickNumbers] = useState([]);
  const [entries, setEntries] = useState([]);
  const [drawnNumbers, setDrawnNumbers] = useState([]);

  const generateDrawnNumbers = () => {
    let numbers = [];
    while (numbers.length < 5) {
      const randomNumber = Math.floor(Math.random() * 50) + 1;
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    setDrawnNumbers(numbers);
    return numbers;
  };

  const addEntry = (selectedNumbers) => {
    if (entries.length < 5) {
      setEntries([...entries, selectedNumbers]);
      setPickNumbers(selectedNumbers);
    } else {
      alert("You can only have 5 entries!");
    }
  };

  return (
    <div className="container">
      <div>
        <Header
          onDrawComplete={generateDrawnNumbers}
          pickNumbers={pickNumbers}
          drawnNumbers={drawnNumbers}
        />
      </div>
      <div className="flex-container">
        <Table
          addEntry={addEntry}
          pickNumbers={pickNumbers}
          setEntries={setEntries}
        />
        <Entries entries={entries} drawnNumbers={drawnNumbers} />
      </div>
    </div>
  );
}

export default App;
