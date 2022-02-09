import React, { FC } from 'react';
import './App.css';

import Layout from './Issues/Layout/Layout';
import IssueList from './Issues/IssueList/IssueList';

const App: FC = () => (
  <div>
    <Layout />
    <IssueList />
  </div>
);

export default App;
