import React, { useState } from "react";

const styles = {
  majors: {
    color: "red",
    fontSize: "1.2rem"
  },
  minors: {
    color: "green"
  },
  happyBtn: {
    marginTop: "0.5rem"
  }
};

export const Counter = () => {
  const [statistic, changeCounter] = useState({ majors: 0, minors: 0 });

  const addMajor = () => {
    changeCounter({
      ...statistic,
      majors: statistic.majors + 1
    });
  };

  const removeMajor = () => {
    changeCounter(prevStat => ({
      ...prevStat,
      majors: prevStat.majors - 1
    }));
  };

  const majorsToMinors = () => {
    changeCounter({
      ...statistic,
      majors: 0,
      minors: statistic.majors + statistic.minors
    });
  };

  return (
    <section>
      <h1>SetState hook demo</h1>
      <p>Number of bugs on Policy UI</p>
      <p>
        Majors: <span style={styles.majors}>{statistic.majors}</span>
      </p>
      <p>
        Minors: <span style={styles.minors}>{statistic.minors}</span>
      </p>
      <div>
        <button onClick={addMajor}>Add</button>{" "}
        <button onClick={removeMajor}>Reduce</button>
      </div>
      <button style={styles.happyBtn} onClick={majorsToMinors}>
        Reach KPI
      </button>
    </section>
  );
};
