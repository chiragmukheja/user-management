import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from './pages/Login';
import Users from './pages/Users';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
      <Toaster position="top-right" />
    </>
  );
}

export default App;