import React from 'react';
import { HomePage } from './pages/HomePage';
import { AdminPage } from './pages/AdminPage';
import { LoginPage } from './pages/LoginPage';
import { isAuthenticated } from './services/authService';

function App() {
  const path = window.location.pathname;

  if (path === '/admin') {
    return isAuthenticated() ? <AdminPage /> : <LoginPage />;
  }

  return <HomePage />;
}

export default App;