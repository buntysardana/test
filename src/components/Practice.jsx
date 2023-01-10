import React, { useState } from "react";

function Practice() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="text-center pt-5">
        <h2>you clicked ${count} times</h2>
        <button
          className="px-3 mt-3 bg-dark text-white"
          onClick={() => setCount(count + 1)}
        >
          click me
        </button>
      </div>
    </>
  );
}

export default Practice;
