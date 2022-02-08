import { Link } from "react-router-dom";

import classes from "./UserItem.module.css";

const UserItem = (props) => {
  const { avatar, login } = props;

  return (
    <div className={classes["user-container"]}>
      <img src={avatar} alt="avatar"></img>
      <p className={classes.name}>{login}</p>
      <p className={classes.location}>San Francisco, California</p>
      <Link className={classes.button} login={login} to={`/users/${login}`}>
        More details...
      </Link>
    </div>
  );
};

export default UserItem;
