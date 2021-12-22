import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const STATUS = {
  STARTED: "Started",
  STOPPED: "Stopped",
};

const  Countdown =({status, setStatus}) => {
  const [secondsRemaining, setSecondsRemaining] = useState(
    Math.floor(Math.random() * 300)
  );
  

  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;
  const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60;

  const handleReset = () => {
    setStatus(STATUS.STARTED);
    setSecondsRemaining(Math.floor(Math.random() * 300));
  };
  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setStatus(STATUS.STOPPED);
      }
    },
    status === STATUS.STARTED ? 1000 : null
  );
  return (
    <Wrapper>
      <span>
        {twoDigits(hoursToDisplay)}:{twoDigits(minutesToDisplay)}:
        {twoDigits(secondsToDisplay)}
      </span>
      <button className="btn-reset" onClick={handleReset} type="button">
        Reset
      </button>

      {/*<div>Status: {status}</div>*/}
    </Wrapper>
  );
}

function useInterval(callback, delay) {
  const savedInterval = useRef();


  useEffect(() => {
    savedInterval.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedInterval.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
const twoDigits = (num) => String(num).padStart(2, "0");

const Wrapper = styled.section`
  display: flex;
  justify-content: space-around;
  margin-bottom: 25px;

  .btn-reset {
    padding: 3px;
    background: transparent;
    letter-spacing: var(--spacing);
    display: inline-block;
    font-weight: 300;
    cursor: pointer;
    border-radius: var(--radius);
    border: transparent;
    color:var(--clr-grey-4)
  }
`;
export default Countdown;