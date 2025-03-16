import React, { useState, useEffect, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FifthAssignmenta.css';

const UserCount = ({ count }) => {
  return (
    <div className="user-count-container">
      <h3>Users Added: <span className="badge bg-success">{count}</span></h3>
    </div>
  );
};

const UserCard = ({ user, onAddUser }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100">
        <div className="card-header bg-primary text-white">
          <h5 className="card-title mb-0">{user.name}</h5>
        </div>
        <div className="card-body">
          <p className="card-text"><strong>Username:</strong> {user.username}</p>
          <p className="card-text"><strong>Email:</strong> {user.email}</p>
          <p className="card-text"><strong>Phone:</strong> {user.phone}</p>
          <p className="card-text"><strong>Website:</strong> {user.website}</p>
          <p className="card-text"><strong>Company:</strong> {user.company.name}</p>
        </div>
        <div className="card-footer">
          <button 
            className="btn btn-success w-100" 
            onClick={() => onAddUser(user.id)}
          >
            Add User
          </button>
        </div>
      </div>
    </div>
  );
};


const FifthAssignmenta = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userCount, setUserCount] = useState(0);
  const [addedUsers, setAddedUsers] = useState({});
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        setUsers(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch users: ' + err.message);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleAddUser = useCallback((userId) => {
    if (!addedUsers[userId]) {
      setUserCount(prevCount => prevCount + 1);
      setAddedUsers(prev => ({
        ...prev,
        [userId]: true
      }));
    }
  }, [addedUsers]);

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2">Loading users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">User Directory</h2>
      <UserCount count={userCount} />
    
      <div className="row">
        {users.map(user => (
          <UserCard 
            key={user.id} 
            user={user} 
            onAddUser={handleAddUser} 
          />
        ))}
      </div>
    </div>
  );
};

export default FifthAssignmenta;