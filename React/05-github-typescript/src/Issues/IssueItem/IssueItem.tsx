import React from 'react';
import { Tag } from 'antd';
import classes from './IssueItem.module.css';

const IssueItem = () => (
  <li className={classes['list-item']}>
    <div className={classes.main}>
      <h2>Bug: React-app showing just html code after running npm start</h2>
      <Tag color="#f50" className={classes.labels}>Label 1</Tag>
      <Tag color="#2db7f5" className={classes.labels}>Label 2</Tag>
      <Tag color="#87d068" className={classes.labels}>Label 3</Tag>
      <Tag color="#108ee9" className={classes.labels}>Label 4</Tag>
    </div>
    <div className={classes.details}>
      #1233456 opened 6 hours ago by alicodes657
    </div>
  </li>
);

export default IssueItem;
