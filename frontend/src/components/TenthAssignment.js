import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (credentials) => {
    setIsLoading(true);
    setError('');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (credentials.username === 'admin' && credentials.password === 'password') {
        const userData = { username: credentials.username, name: 'Admin User' };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        return true;
      } else {
        setError('Invalid username or password');
        return false;
      }
    } catch (error) {
      setError('An error occurred during login');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const authContextValue = {
    user,
    isLoading,
    error,
    login,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const { login, error, isLoading } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(credentials);
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <div className="login-info">
        <p>Use these credentials to test:</p>
        <p>Username: admin</p>
        <p>Password: password</p>
      </div>
    </div>
  );
};
const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard">
      <h2>Welcome, {user.name}</h2>
      <div className="user-info">
        <p>You are logged in as: <strong>{user.username}</strong></p>
        <p>This is your protected dashboard area.</p>
      </div>
      <button onClick={logout} className="logout-button">Logout</button>
    </div>
  );
};

const ProtectedContent = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return isAuthenticated ? children : <LoginForm />;
};

const TenthAssignment = () => {
  return (
    <div className="auth-app">
      <h1>User Authentication System</h1>
      <AuthProvider>
        <div className="content">
          <ProtectedContent>
            <Dashboard />
          </ProtectedContent>
        </div>
      </AuthProvider>

      <style jsx="true">{`
        .auth-app {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        
        h1 {
          color: #2c3e50;
          text-align: center;
          margin-bottom: 30px;
        }
        
        .content {
          background-color: #f8f9fa;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          padding: 20px;
        }
        
        .login-form, .dashboard {
          max-width: 400px;
          margin: 0 auto;
        }
        
        h2 {
          margin-top: 0;
          color: #2c3e50;
          text-align: center;
          margin-bottom: 20px;
        }
        
        .form-group {
          margin-bottom: 15px;
        }
        
        label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
          color: #2c3e50;
        }
        
        input {
          width: 100%;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
        }
        
        button {
          width: 100%;
          padding: 10px;
          background-color: #3498db;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          margin-top: 10px;
        }
        
        button:hover {
          background-color: #2980b9;
        }
        
        button:disabled {
          background-color: #95a5a6;
          cursor: not-allowed;
        }
        
        .error-message {
          background-color: #f8d7da;
          color: #721c24;
          padding: 10px;
          border-radius: 4px;
          margin-bottom: 15px;
          text-align: center;
        }
        
        .loading {
          text-align: center;
          padding: 20px;
          font-style: italic;
          color: #7f8c8d;
        }
        
        .user-info {
          background-color: #eaf2f8;
          padding: 15px;
          border-radius: 4px;
          margin-bottom: 20px;
        }
        
        .logout-button {
          background-color: #e74c3c;
        }
        
        .logout-button:hover {
          background-color: #c0392b;
        }
        
        .login-info {
          margin-top: 20px;
          padding: 10px;
          background-color: #f1f1f1;
          border-radius: 4px;
          font-size: 14px;
        }
        
        .login-info p {
          margin: 5px 0;
        }
      `}</style>
    </div>
  );
};

export default TenthAssignment;