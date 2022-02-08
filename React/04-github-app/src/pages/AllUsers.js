import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../store/action-creators";
import { useEffect, useState } from "react";

import UserList from "../components/Users/UserList";
import classes from "./AllUsers.module.css";

let initial = true;

const AllUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const [startFrom, setStartFrom] = useState(0);
  const amount = 10;
  const lastUser = users.at(-1);

  useEffect(() => {
    if (initial) {
      dispatch(fetchAllUsers(0, amount));
      initial = false;
    }
  }, [dispatch]);

  const loadMoreHandler = () => {
    const nextIndex = startFrom + lastUser.id + 1;
    setStartFrom(nextIndex);

    dispatch(fetchAllUsers(nextIndex, amount));
  };

  return (
    <div>
      <UserList />
      <button className={classes.button} onClick={loadMoreHandler}>
        Load more...
      </button>
    </div>
  );
};

export default AllUsers;
