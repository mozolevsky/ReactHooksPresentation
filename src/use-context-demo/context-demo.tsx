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
    backgroundColor: "black",
    color: "#BABACA"
  }
];

const userInfoMockes = [
  {
    name: "Toni Robins",
    role: "COACH",
    img: "https://poddmap.com/coverarts/5bd4d1c31edf070bd7712a8d/256x256.jpg"
  },
  {
    name: "Barbra Streisand",
    role: "ACTRESS",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQql0Y5A0l34-C5SVi3UOZ3-7eV0nQ1D0rrfNA2Dh7LkZqz9mBu"
  }
];

export const ContextDemo = () => {
  const [currentTheme, setTheme] = useState(themesMocks[0]);
  const [currentUser, setUser] = useState({
    data: userInfoMockes[0],
    changeUser: role => null
  });

  const changeTheme = () => {
    setTheme(
      currentTheme.type === themesMocks[0].type
        ? themesMocks[1]
        : themesMocks[0]
    );
  };

  const changeUser = role => {
    const data =
      typeof role === "string"
        ? userInfoMockes.find(v => v.role !== role)
        : userInfoMockes[Math.round(Math.random())];

    setUser({ data, changeUser });
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
        <button onClick={changeUser}>Coose random user</button>
      </section>
    </ThemeContext.Provider>
  );
};
