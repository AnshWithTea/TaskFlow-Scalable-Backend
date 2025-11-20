import { useState } from 'react';
import API from '../services/api';
import { useNavigate, Link } from 'react-router-dom';

const RegisterPage = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/register', formData);
      alert('Registration Successful! Please Login.');
      navigate('/');
    } catch (error) {
      alert(error.response?.data?.message || 'Registration Failed');
    }
  };

  // Use same styles as Login for consistency
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
      backgroundColor: '#10b981', // Green for Register
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
      color: '#34d399',
      textDecoration: 'none',
      fontWeight: '500',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Create Account</h1>
        <p style={styles.subtitle}>Join us to start managing your tasks</p>
        
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Full Name" 
            onChange={(e) => setFormData({ ...formData, username: e.target.value })} 
            required 
            style={styles.input}
          />
          <input 
            type="email" 
            placeholder="name@company.com" 
            onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
            required 
            style={styles.input}
          />
          <input 
            type="password" 
            placeholder="Password" 
            onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
            required 
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Sign Up</button>
        </form>

        <p style={styles.linkText}>
          Already have an account? <Link to="/" style={styles.link}>Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;