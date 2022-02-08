import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleUser } from "../store/action-creators";
import { useLocation } from "react-router";
import classes from "./UserDetail.module.css";

const imagePath = require("../assets/location.png");

const UserDetail = () => {
  const [showRepos, setShowRepos] = useState(false);
  const locationPath = useLocation();
  const dispatch = useDispatch();

  const users = useSelector((state) => state.user.users);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

  const username = locationPath.pathname.split("/").pop();
  const currentUser = users.find((user) => user.login === username);

  useEffect(() => {
    dispatch(fetchSingleUser(locationPath.pathname));
  }, [dispatch, locationPath.pathname]);

  const showReposHandler = () => {
    setShowRepos(!showRepos);
  };

  if (!currentUser) {
    return loading || error;
  }

  return (
    <Fragment>
      <div className={classes.cover}>
        <img src={currentUser.avatar_url} alt="avatar"></img>
      </div>

      <div className={classes.personal}>
        <h2>{currentUser.name}</h2>
        <div className={classes.location}>
          <img src={imagePath} alt="logo"></img>
          <p>{currentUser.location}</p>
        </div>
      </div>

      <div className={classes.details}>
        <div className={classes.box}>
          <p>Followers: {currentUser.followers}</p>
        </div>
        <div className={classes.box}>
          <p>Following: {currentUser.following}</p>
        </div>
        <div className={classes.box} onClick={showReposHandler}>
          <p>Public repositories: {currentUser.public_repos}</p>
        </div>
      </div>

      {showRepos && (
        <div className={classes.container}>
          <div className={classes.repoBox}>
            <p>Repository Name</p>
          </div>
          <div className={classes.repoBox}>
            <p>Repository Name</p>
          </div>
          <div className={classes.repoBox}>
            <p>Repository Name</p>
          </div>
          <div className={classes.repoBox}>
            <p>Repository Name</p>
          </div>
          <div className={classes.repoBox}>
            <p>Repository Name</p>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default UserDetail;
