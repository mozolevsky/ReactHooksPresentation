import React, { useContext } from "react";
import { ThemeContext } from "./theme-context";
import { UserContext } from "./user-context";

const boxStyles = {
  height: "300px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  transition: "all 0.3s ease"
};

const imgStyles = {
  width: "100px",
  transition: "all 0.3s ease"
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
        <img onClick={onClickHandle} src={img} style={imgStyles} alt={name} />
      </div>
      <p>
        {name} - {role}
      </p>
    </div>
    // <div>
    //   <ThemeContext.Consumer>
    //     {theme => (
    //       <div style={{...theme, ...boxStyles}}>223</div>
    //     )}
    //   </ThemeContext.Consumer>
    // </div>
  );
};
