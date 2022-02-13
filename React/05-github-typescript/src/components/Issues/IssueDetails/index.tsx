import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Tag } from 'antd';
import { useParams } from 'react-router-dom';
import { useTypedDispatch, useTypedSelector } from '../../../redux/hooks';
import { fetchSingleIssue } from '../IssueAPI/http-actions';

import classes from './index.module.css';

const IssueDetails = () => {
  const issues = useTypedSelector((state) => state.issue.issues);
  const { issueId } = useParams();
  const dispatch = useTypedDispatch();

  const currentIssue = issues.find((issue) => issue.number === Number(issueId));

  useEffect(() => {
    dispatch(fetchSingleIssue(Number(issueId)));
  }, []);

  if (!currentIssue) {
    return <div>loading</div>;
  }

  const markdown: any = currentIssue.body;

  return (
    <div className={classes.main}>
      <div className={classes.header}>
        {currentIssue.title}
      </div>
      <div className={classes.container}>
        <div className={classes.details}>
          <div className={classes.info}>Issue details</div>
          <div className={classes.avatar}>
            <img src={currentIssue.user.avatar} alt="avatar" />
            <div>{currentIssue.user.login}</div>
          </div>
          <div className={classes.status}>
            <div>
              State:
              {' '}
              {currentIssue.state}
            </div>
            <div>
              Issue: #
              {currentIssue.number}
            </div>
            <div>
              Labels:
              {currentIssue.labels.map((label) => (
                <Tag key={Math.random().toString()} color={`#${label.color}`} className={classes.labels}>{label.name}</Tag>
              ))}
            </div>
          </div>
        </div>
        <div className={classes.issue}>
          <ReactMarkdown>
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default IssueDetails;
