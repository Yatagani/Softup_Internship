import getIssues from './api';
import { AppDispatch } from '../../../redux/store';
import { fetchAll, fetchSingle } from '../../../redux/reducers/issueSlice';
import { Issue, IssueDetails } from '../locales/types';

export const fetchAllIssues = (page?: number) => async (dispatch: AppDispatch) => {
  const url = `https://api.github.com/repos/facebook/react/issues?per_page=10&page=${page}`;

  // ---START--- action here
  try {
    const response = await getIssues(url);
    const issueData = await response.json();

    // ---SUCCESS--- action here

    const filteredData: Issue[] = [];

    Object.values(issueData).forEach((item: any) => filteredData.push({
      title: item.title,
      state: item.state,
      labels: item.labels,
      number: item.number,
      createdAt: item.created_at,
      user: {
        id: item.user.id,
        login: item.user.login,
        avatar: item.user.avatar_url,
      },
    }));

    dispatch(fetchAll(filteredData));

    return filteredData;
  } catch (e) {
    // ---ERROR--- action here
    return e;
  }
};

export const fetchSingleIssue = (issueId: number) => async (dispatch: AppDispatch) => {
  const url = `https://api.github.com/repos/facebook/react/issues/${issueId}`;

  // ---START--- action here
  try {
    const response = await getIssues(url);
    const issueData = await response.json();

    // ---SUCCESS--- action here

    const filteredData: IssueDetails[] = [];

    filteredData.push({
      title: issueData.title,
      state: issueData.state,
      labels: issueData.labels,
      number: issueData.number,
      createdAt: issueData.created_at,
      user: {
        id: issueData.user.id,
        login: issueData.user.login,
        avatar: issueData.user.avatar_url,
      },
      body: issueData.body,
    });

    dispatch(fetchSingle(filteredData));

    return filteredData;
  } catch (e) {
    // ---ERROR--- action here
    return e;
  }
};
