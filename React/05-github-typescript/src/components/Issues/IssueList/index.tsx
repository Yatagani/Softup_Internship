import React, { FC, useEffect } from 'react';
import { Pagination } from 'antd';
import { fetchAllIssues } from '../IssueAPI/http-actions';
import { useTypedSelector, useTypedDispatch } from '../../../redux/hooks';

import classes from './index.module.css';
import IssueItem from '../IssueItem';

let initial = true;

const IssueList: FC = () => {
  const dispatch = useTypedDispatch();
  const issues = useTypedSelector((state) => state.issue.issues);

  useEffect(() => {
    if (initial) {
      dispatch(fetchAllIssues());
      initial = false;
    }
  }, []);

  const onChange = (page: number) => {
    dispatch(fetchAllIssues(page));
  };

  return (
    <div>
      <ul className={classes['list-group']}>
        {issues.map((issue) => (
          <IssueItem
            key={issue.number}
            number={issue.number}
            state={issue.state}
            user={issue.user}
            title={issue.title}
            createdAt={issue.createdAt}
            labels={issue.labels}
          />
        ))}
      </ul>
      <div className={classes.pagination}>
        <Pagination defaultCurrent={1} total={50} onChange={onChange} />
      </div>
    </div>
  );
};

export default IssueList;
