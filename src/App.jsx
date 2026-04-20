import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Shipments from './pages/Shipments';
import RouteOptimization from './pages/RouteOptimization';
import AIPrediction from './pages/AIPrediction';
import Alerts from './pages/Alerts';
const Login = () => <div className="flex items-center justify-center h-screen bg-gray-50"><h2 className="text-3xl font-bold">Login / Signup Page</h2></div>;

function App() {
  // Simple mock auth state
  const isAuthenticated = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        {/* Protected Routes */}
        <Route path="/" element={isAuthenticated ? <Layout /> : <Navigate to="/login" />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="shipments" element={<Shipments />} />
          <Route path="route" element={<RouteOptimization />} />
          <Route path="ai-predict" element={<AIPrediction />} />
          <Route path="alerts" element={<Alerts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
