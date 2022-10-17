import { NavLink } from "react-router-dom";

const BackBtn = ({ to, text, margin }) => {
  const BackBtnStyle = {
    position: "absolute",
    backgroundColor: "#76ace146",
    padding: "0.9rem 2rem",
    fontWeight: "500",
    color: "#fff",
    cursor: "pointer",
    margin: margin ? margin : "1.5rem 2rem",
    borderRadius: "10px",
    textDecoration: "none",
    fontSize: "1.2rem",
  };
  return (
    <NavLink style={BackBtnStyle} to={to} className="playBack">
      {text}
    </NavLink>
  );
};

export default BackBtn;
