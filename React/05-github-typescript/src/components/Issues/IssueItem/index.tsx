import React from 'react';
import { Tag } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchSingleIssue } from '../IssueAPI/http-actions';
import { Issue } from '../locales/types';

import classes from './index.module.css';

const IssueItem = (props: Issue) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    number,
    state,
    createdAt,
    user,
    labels,
    title,
  } = props;

  const createdDate = new Date(createdAt).getTime();
  const hours = Math.floor(((Date.now() - createdDate) / (1000 * 60 * 60)) % 24);
  const details = `#${number} ${state}ed ${hours} hours ago by ${user.login}`;

  const issueDetailsHandler: React.MouseEventHandler = () => {
    dispatch(fetchSingleIssue(number));
    navigate(`/issues/${number}`);
  };

  return (
    <li className={classes['list-item']}>
      <div className={classes.main}>
        <div role="presentation" className={classes.title} onClick={issueDetailsHandler}>{title}</div>
        {labels.map((label) => (
          <Tag key={Math.random().toString()} color={`#${label.color}`} className={classes.labels}>{label.name}</Tag>
        ))}
      </div>
      <div className={classes.details}>{details}</div>
    </li>
  );
};

export default IssueItem;
