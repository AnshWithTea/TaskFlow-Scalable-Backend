import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Link
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import RegisterPage from './pages/RegisterPage'; // Import the new page

function App() {
  return (
    <Router>
      <Routes>
        {/* Update Login Route to have a link to Register */}
        <Route path="/" element={
          <div>
            <LoginPage />
            <p style={{textAlign: 'center'}}>
              Don't have an account? <Link to="/register">Register here</Link>
            </p>
          </div>
        } />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;