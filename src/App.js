import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SquidGameLoader from './components/loader/SquidGameLoader';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="flex justify-center mt-10"><SquidGameLoader /></div>}>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/settings" element={<Settings />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
