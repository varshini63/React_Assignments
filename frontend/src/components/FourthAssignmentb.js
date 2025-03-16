import React, { useState } from 'react';
import './FourthAssignmentb.css';

const FourthAssignmentb = () => {
  const [formData, setFormData] = useState({
    username: '',
    dob: '',
    city: ''
  });

  const [errors, setErrors] = useState({});

  const [users, setUsers] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.username) {
      tempErrors.username = "Username is required";
      isValid = false;
    } else if (formData.username.length < 4) {
      tempErrors.username = "Username must be at least 4 characters";
      isValid = false;
    } else if (formData.username.length > 8) {
      tempErrors.username = "Username must be at most 8 characters";
      isValid = false;
    }

    if (!formData.dob) {
      tempErrors.dob = "Date of Birth is required";
      isValid = false;
    }

    if (!formData.city) {
      tempErrors.city = "City is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {

      const newUser = {
        id: Date.now(), 
        ...formData
      };
      
      setUsers([...users, newUser]);
      setFormData({
        username: '',
        dob: '',
        city: ''
      });
      
      console.log("User added successfully:", newUser);
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <div className="user-management-container">
      <div className="registration-section">
        <h2>User Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className={errors.username ? "input-error" : ""}
            />
            {errors.username && <div className="error-message">{errors.username}</div>}
          </div>
          
          <div className="form-group">
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className={errors.dob ? "input-error" : ""}
            />
            {errors.dob && <div className="error-message">{errors.dob}</div>}
          </div>
          
          <div className="form-group">
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className={errors.city ? "input-error" : ""}
            />
            {errors.city && <div className="error-message">{errors.city}</div>}
          </div>
          
          <button type="submit" className="add-user-btn">Add User</button>
        </form>
      </div>
      
      <div className="users-list-section">
        <h2>List of Users</h2>
        <table className="users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Date of Birth</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.dob}</td>
                  <td>{user.city}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="no-data">No users added yet</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FourthAssignmentb;