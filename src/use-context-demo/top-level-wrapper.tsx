import React, { useState } from "react";
import { ThemeContext } from "./theme-context";
import { UserContext } from "./user-context";
import { Wrapper } from "./dummy-wrapper";
import { UserCard } from "./user-card";

const themesMocks = [
  {
    type: "day",
    backgroundColor: "#C55",
    color: "#FACE88"
  },
  {
    type: "night",
    backgroundColor: "#833713",
    color: "#BABACA"
  }
];

const userInfoMockes = [
  {
    name: "Toni Robinson",
    role: "COACH"
  },
  {
    name: "Miki Kazumi",
    role: "QA"
  }
];

export const TopLevelWrapper = () => {
  const [currentTheme, setTheme] = useState(themesMocks[0]);
  const [currentUser, setUser] = useState(userInfoMockes[0]);

  const changeTheme = () => {
    setTheme(
      currentTheme.type === themesMocks[0].type
        ? themesMocks[1]
        : themesMocks[0]
    );
  };

  const changeUser = () => {
    setUser(
      currentUser.role === userInfoMockes[0].role
        ? userInfoMockes[1]
        : userInfoMockes[0]
    );
  };

  return (
    <ThemeContext.Provider value={currentTheme}>
      <Wrapper>
        <UserContext.Provider value={currentUser}>
          <Wrapper>
            <Wrapper>
              <UserCard />
            </Wrapper>
          </Wrapper>
        </UserContext.Provider>
      </Wrapper>
      <section style={{ marginTop: "2rem" }}>
        <button onClick={changeTheme}>Change theme</button>{" "}
        <button onClick={changeUser}>Change user</button>
      </section>
    </ThemeContext.Provider>
  );
};
