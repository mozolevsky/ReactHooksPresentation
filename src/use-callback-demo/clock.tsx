import React, { useState, useEffect, useCallback } from "react";
import { MemoizedChild } from "./child";

export const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [count, setCount] = useState(0);
  const [isMemo, changeMode] = useState(true);

  useEffect(() => {
    const date = new Date();
    const timer = setTimeout(() => setTime(date), 1000);

    return () => clearTimeout(timer);
  });

  const cb = () => null;

  const memoizedClb = useCallback(cb, [count]);

  return (
    <div>
      <p>Time: {time.toLocaleString()}</p>
      <p>
        <button onClick={() => changeMode(!isMemo)}>Change mode</button> |{" "}
        <button onClick={() => setCount(count + 1)}>Counter</button> |{" "}
        <span>{count}</span>
      </p>
      <MemoizedChild clb={isMemo ? memoizedClb : cb} />
    </div>
  );
};
