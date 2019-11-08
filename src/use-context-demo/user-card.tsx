import React, { useContext, memo } from "react";
import { ThemeContext } from "./theme-context";
import { UserContext } from "./user-context";

const boxStyles = {
  height: "200px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

export const UserCard = memo(() => {
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <div style={{ ...theme, ...boxStyles }}>
      <p>
        {user.name} - {user.role}
      </p>
    </div>
  );
});
