import React, { useState } from "react";

const Table = ({ addEntry, setEntries }) => {
  const [selectedNumbers, setSelectedNumbers] = useState([]);

  const toggleNumberSelection = (number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter((num) => num !== number));
    } else if (selectedNumbers.length < 5) {
      setSelectedNumbers([...selectedNumbers, number]);
    } else {
      alert("You can only select up to 5 numbers!");
    }
  };

  const handlePickNumbers = () => {
    if (selectedNumbers.length === 5) {
      addEntry(selectedNumbers);
      setSelectedNumbers([]);
    } else {
      alert("Please select exactly 5 numbers!");
    }
  };

  const resetEntries = () => {
    setEntries([]);
    setSelectedNumbers([]);
  };

  return (
    <div>
      <table id="numberTable">
        <tbody>
          {[...Array(5)].map((_, rowIndex) => (
            <tr key={rowIndex}>
              {[...Array(10)].map((_, colIndex) => {
                const number = rowIndex * 10 + colIndex + 1;
                return (
                  <td
                    key={number}
                    id={`number${number}`}
                    className={
                      selectedNumbers.includes(number) ? "selected" : ""
                    }
                    onClick={() => toggleNumberSelection(number)}
                  >
                    {number}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="buttons">
        <button onClick={handlePickNumbers}>Pick Numbers</button>
        <button onClick={resetEntries}>Reset Entries</button>
      </div>
    </div>
  );
};

export default Table;
