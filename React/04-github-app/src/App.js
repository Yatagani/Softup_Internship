import { Route, Routes, Navigate } from 'react-router-dom';

import NotFound from './pages/NotFound';
import AllUsers from './pages/AllUsers';
import UserDetail from './pages/UserDetail';
import Layout from './components/Layout/Layout';

// Comment:

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Navigate replace to='/users' />} />
        <Route path='/users' element={<AllUsers />} />
        <Route path='/users/:userId' element={<UserDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
