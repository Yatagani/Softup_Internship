import classes from "./UserList.module.css";
import UserItem from "./UserItem";
import { useSelector } from "react-redux";

const UserList = () => {
  const users = useSelector((state) => state.user.users);

  return (
    <div className={classes.container}>
      {users.map((user) => (
        <UserItem
          key={user.id}
          user_id={user.id}
          node_id={user.node_id}
          login={user.login}
          avatar={user.avatar_url}
          url={user.url}
        />
      ))}
    </div>
  );
};

export default UserList;
