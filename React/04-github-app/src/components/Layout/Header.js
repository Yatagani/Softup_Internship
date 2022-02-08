import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const imagePath = require("../../assets/Github_logo.png");

const Header = () => {
  return (
    <div className={classes.header}>
      <Link to="/users">
        <img src={imagePath} alt="logo"></img>
      </Link>
    </div>
  );
};

export default Header;
