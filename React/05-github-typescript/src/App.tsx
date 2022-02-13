import React, { FC } from 'react';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import IssuesPage from './components/Issues/IssueList';
import IssueDetailPage from './components/Issues/IssueDetails';
import NotFoundPage from './components/NotFound';

const App: FC = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Navigate replace to="/issues" />} />
      <Route path="/issues" element={<IssuesPage />} />
      <Route path="/issues/:issueId" element={<IssueDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Layout>
);

export default App;
