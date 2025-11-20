import { useState } from 'react';
import API from '../services/api';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post('/auth/login', formData);
      localStorage.setItem('user', JSON.stringify(data));
      navigate('/dashboard');
    } catch (error) {
      alert(error.response?.data?.message || 'Login Failed');
    }
  };

  // --- STYLES ---
  const styles = {
    container: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0f172a',
    },
    card: {
      width: '100%',
      maxWidth: '400px',
      backgroundColor: '#1e293b',
      padding: '40px',
      borderRadius: '16px',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
      border: '1px solid #334155',
    },
    title: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#f8fafc',
      textAlign: 'center',
      marginBottom: '10px',
    },
    subtitle: {
      color: '#94a3b8',
      textAlign: 'center',
      marginBottom: '30px',
      fontSize: '0.95rem',
    },
    input: {
      width: '100%',
      padding: '12px 16px',
      backgroundColor: '#0f172a',
      border: '1px solid #334155',
      borderRadius: '8px',
      color: '#fff',
      marginBottom: '15px',
      fontSize: '1rem',
      outline: 'none',
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#6366f1',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      marginTop: '10px',
      transition: 'background 0.2s',
    },
    linkText: {
      textAlign: 'center',
      marginTop: '20px',
      color: '#94a3b8',
      fontSize: '0.9rem',
    },
    link: {
      color: '#818cf8',
      textDecoration: 'none',
      fontWeight: '500',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome Back</h1>
        <p style={styles.subtitle}>Enter your credentials to access your account</p>
        
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="name@company.com" 
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required 
            style={styles.input}
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required 
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Sign In</button>
        </form>

        <p style={styles.linkText}>
          Don't have an account? <Link to="/register" style={styles.link}>Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;