import React from "react";

const Entries = ({ entries, drawnNumbers }) => {
  return (
    <div>
      <h3>Your Entries: {entries.length}</h3>
      {entries.length === 0 ? (
        <p>No entries yet.</p>
      ) : (
        entries.map((entry, index) => (
          <div key={index} className="entry">
            <p>
              Entry {index + 1}:{" "}
              {entry.map((num, idx) => (
                <span
                  key={idx}
                  className={`number ${
                    drawnNumbers.includes(num) ? "match" : ""
                  }`}
                >
                  {num}
                </span>
              ))}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Entries;
