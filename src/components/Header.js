import React, { useState, useEffect } from "react";
import keno from "../keno.png";

const Header = ({ onDrawComplete, pickNumbers, drawnNumbers }) => {
  const [timeLeft, setTimeLeft] = useState(60); // Countdown timer
  const [jackpotHit, setJackpotHit] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!jackpotHit) {
        setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }
    }, 1000);

    if (timeLeft === 0) {
      const drawnNumbers = onDrawComplete();
      const isJackpot =
        drawnNumbers.length === pickNumbers.length &&
        drawnNumbers.every((num) => pickNumbers.includes(num));

      setJackpotHit(isJackpot);
      setTimeLeft(60);
    }

    return () => clearInterval(interval);
  }, [timeLeft, onDrawComplete, pickNumbers, jackpotHit]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const countdownStyle = {
    color: timeLeft <= 10 ? "red" : "",
  };

  return (
    <div className="header">
      <img src={keno} alt="keno" style={{ width: "150px", height: "auto" }} />
      <h1>Keno Simulator Game</h1>
      <p>Select up to 5 numbers from 1 to 50</p>
      <h2 style={countdownStyle}>
        {jackpotHit ? "You WON!" : `Next draw in: ${formatTime(timeLeft)}`}
      </h2>
      <h3>
        Drawn Numbers:{" "}
        {drawnNumbers.length > 0
          ? drawnNumbers.join(", ")
          : "Waiting for the next draw! Good luck🎉"}
      </h3>
    </div>
  );
};

export default Header;
