import React, { FC } from 'react';

import classes from './IssueList.module.css';
import IssueItem from '../IssueItem/IssueItem';

const IssueList: FC = () => (
  <ul className={classes['list-group']}>
    <IssueItem />
    <IssueItem />
    <IssueItem />
    <IssueItem />
    <IssueItem />
  </ul>
);

export default IssueList;
