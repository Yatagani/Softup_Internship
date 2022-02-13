/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Issue, IssueDetails } from '../../components/Issues/locales/types';

export interface defaultInitialState {
    issues: Issue[],
    status: 'idle' | 'loading' | 'error'
}

const initialState: defaultInitialState = {
  issues: [],
  status: 'idle',
};

const issueSlice = createSlice({
  name: 'issue',
  initialState,
  reducers: {
    fetchAll: (state, action: PayloadAction<Issue[]>) => {
      if (state.issues.length === 1) {
        state.issues = [];
      }
      // state.issues = [...state.issues, ...action.payload];
      state.issues = action.payload;
    },
    fetchSingle: (state, action: PayloadAction<IssueDetails[]>) => {
      if (state.issues.length) {
        const issueIndex = state.issues
          .findIndex((issue) => issue.number === action.payload[0].number);
        const updatedIssue = {
          ...state.issues[issueIndex],
          ...action.payload[0],
        };
        state.issues[issueIndex] = updatedIssue;
      } else {
        state.issues = action.payload;
      }
    },
  },
});

export const { fetchAll, fetchSingle } = issueSlice.actions;

export default issueSlice;
