import { useEffect, useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!user) navigate('/');
    else fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const { data } = await API.get('/tasks');
      setTasks(data);
    } catch (error) {
      console.error('Failed to fetch tasks');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    try {
      if (editingTask) {
        await API.put(`/tasks/${editingTask._id}`, { title: newTask });
        setEditingTask(null);
      } else {
        await API.post('/tasks', { title: newTask, user: user._id });
      }
      setNewTask('');
      fetchTasks();
    } catch (error) {
      alert('Operation failed');
    }
  };

  const startEditing = (task) => {
    setEditingTask(task);
    setNewTask(task.title);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this task?')) {
      try {
        await API.delete(`/tasks/${id}`);
        fetchTasks();
      } catch (error) {
        alert('Failed to delete');
      }
    }
  };

  // --- STYLES ---
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f0f2f5',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 20px',
    },
    header: {
      width: '100%',
      maxWidth: '800px',
      backgroundColor: '#4F46E5', // Indigo
      color: 'white',
      padding: '20px 30px',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '30px',
    },
    logoutBtn: {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      color: 'white',
      border: '1px solid rgba(255, 255, 255, 0.4)',
      padding: '8px 16px',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'all 0.2s',
      fontSize: '0.9rem',
    },
    formCard: {
      backgroundColor: 'white',
      padding: '25px',
      borderRadius: '12px',
      width: '100%',
      maxWidth: '800px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      marginBottom: '30px',
      display: 'flex',
      gap: '15px',
    },
    input: {
      flex: 1,
      padding: '12px 15px',
      border: '2px solid #e5e7eb',
      borderRadius: '8px',
      fontSize: '1rem',
      outline: 'none',
      color: '#333', // Dark text for visibility
    },
    actionBtn: {
      backgroundColor: editingTask ? '#F59E0B' : '#10B981', // Amber or Emerald
      color: 'white',
      border: 'none',
      padding: '12px 25px',
      borderRadius: '8px',
      fontWeight: '600',
      cursor: 'pointer',
      fontSize: '1rem',
    },
    cancelBtn: {
      backgroundColor: '#6B7280',
      color: 'white',
      border: 'none',
      padding: '12px 20px',
      borderRadius: '8px',
      fontWeight: '600',
      cursor: 'pointer',
    },
    taskList: {
      width: '100%',
      maxWidth: '800px',
      listStyle: 'none',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    taskItem: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderLeft: '5px solid #4F46E5',
    },
    taskText: {
      fontSize: '1.1rem',
      color: '#1F2937', // Dark gray/black for high contrast
      fontWeight: '500',
    },
    btnGroup: {
      display: 'flex',
      gap: '10px',
    },
    editBtn: {
      backgroundColor: '#EEF2FF',
      color: '#4F46E5',
      border: 'none',
      padding: '8px 15px',
      borderRadius: '6px',
      fontWeight: '600',
      cursor: 'pointer',
    },
    deleteBtn: {
      backgroundColor: '#FEF2F2',
      color: '#EF4444',
      border: 'none',
      padding: '8px 15px',
      borderRadius: '6px',
      fontWeight: '600',
      cursor: 'pointer',
    }
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.5rem' }}>Dashboard</h2>
          <p style={{ margin: '5px 0 0 0', opacity: 0.9, fontSize: '0.9rem' }}>
            Welcome back, {user?.username}
          </p>
        </div>
        <button 
          onClick={() => { localStorage.removeItem('user'); navigate('/'); }}
          style={styles.logoutBtn}
        >
          Sign Out
        </button>
      </div>

      {/* Input Form Section */}
      <form onSubmit={handleSubmit} style={styles.formCard}>
        <input 
          type="text" 
          placeholder={editingTask ? "Update your task..." : "What needs to be done?"}
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.actionBtn}>
          {editingTask ? 'Update' : 'Add Task'}
        </button>
        {editingTask && (
          <button type="button" onClick={() => { setEditingTask(null); setNewTask(''); }} style={styles.cancelBtn}>
            Cancel
          </button>
        )}
      </form>

      {/* Task List Section */}
      <ul style={styles.taskList}>
        {tasks.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#6B7280', marginTop: '20px' }}>
            No tasks yet. Add one above!
          </p>
        ) : (
          tasks.map((task) => (
            <li key={task._id} style={styles.taskItem}>
              <span style={styles.taskText}>{task.title}</span>
              <div style={styles.btnGroup}>
                <button onClick={() => startEditing(task)} style={styles.editBtn}>
                  Edit
                </button>
                <button onClick={() => handleDelete(task._id)} style={styles.deleteBtn}>
                  Delete
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Dashboard;