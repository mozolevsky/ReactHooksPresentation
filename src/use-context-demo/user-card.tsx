import React, { useContext } from "react";
import { ThemeContext } from "./theme-context";
import { UserContext } from "./user-context";

const boxStyles = {
  height: "300px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column"
};

export const UserCard = props => {
  const theme = useContext(ThemeContext);
  const {
    data: { img, name, role },
    changeUser
  } = useContext(UserContext);

  const onClickHandle = () => {
    changeUser(role);
  };

  return (
    <div style={{ ...theme, ...boxStyles }}>
      <div>
        <img onClick={onClickHandle} src={img} width="100px" alt={name} />
      </div>
      <p>
        {name} - {role}
      </p>
    </div>
  );
};
