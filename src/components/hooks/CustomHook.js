import { useState, useEffect, useRef } from "react";
import useLocalStorage from "./customHooks/useLocalStorage";
import usePrevious from "./customHooks/usePrevious";

export default function CustomHook() {
  const [day, setDay] = useState("Monday");
  const prevDay = usePrevious(day);
  const [inputValue, setInputValue] = useLocalStorage('name', '')

  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday")
    } else if (day === "Tuesday") {
      setDay("Wednesday")
    } else if (day === "Wednesday") {
      setDay("Thursday")
    } else if (day === "Thursday") {
      setDay("Friday")
    } else if (day === "Friday") {
      setDay("Monday")
    }
  }

  return (
    <div>
      <h2>Custom Hooks:</h2>
      <p>
        1. useLocalStorage custom hook which store value to the localstorage and persist it accross the sessions. <br />
        2. usePrevious custom hook which store previous day.
      </p>
      <hr />

      {/* useLocalStorage Hook Example */}
      <div>
        <h3>1. useLocalStorage Hook:</h3>
        <input 
          className="form-control" 
          type="text" 
          placeholder="Type value to store..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>

      <hr/>

      {/* usePrevious Hook Example */}
      <div>
        <h3>2. usePrevious Hook:</h3>
        <h6>
          Today is: {day}<br />
          {
            prevDay && (
              <span>Previous work day was: {prevDay}</span>
            )
          }
        </h6>
        <button onClick={getNextDay} className='btn btn-primary'>
          Get next day
        </button>
      </div>

    </div>
  );

}
