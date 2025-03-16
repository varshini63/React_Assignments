import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FourthAssignmenta.css';

const FourthAssignmenta = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    birthday: '',
    gender: 'Male',
    email: '',
    phone_number: '',
    subject: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

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

    if (!formData.first_name) {
      tempErrors.first_name = "First name is required";
      isValid = false;
    } else if (formData.first_name.length < 4) {
      tempErrors.first_name = "First name must be at least 4 characters";
      isValid = false;
    } else if (formData.first_name.length > 6) {
      tempErrors.first_name = "First name must be at most 6 characters";
      isValid = false;
    }

    if (!formData.last_name) {
      tempErrors.last_name = "Last name is required";
      isValid = false;
    } else if (formData.last_name.length < 4) {
      tempErrors.last_name = "Last name must be at least 4 characters";
      isValid = false;
    } else if (formData.last_name.length > 6) {
      tempErrors.last_name = "Last name must be at most 6 characters";
      isValid = false;
    }
    if (!formData.birthday) {
      tempErrors.birthday = "Birthday is required";
      isValid = false;
    }

  
    if (!formData.gender) {
      tempErrors.gender = "Gender is required";
      isValid = false;
    }

    if (!formData.email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }
    if (!formData.phone_number) {
      tempErrors.phone_number = "Phone number is required";
      isValid = false;
    } else if (formData.phone_number.length !== 10 || !/^\d+$/.test(formData.phone_number)) {
      tempErrors.phone_number = "Phone number must be exactly 10 digits";
      isValid = false;
    }

    if (!formData.subject) {
      tempErrors.subject = "Subject is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    
    if (isValid) {
      setSubmitted(true);
      console.log("Form submitted successfully:", formData);
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <div className="form-container">
      <div className="registration-card">
        <h2 className="mb-4">Registration Form</h2>
        
        {submitted ? (
          <div className="alert alert-success">Registration submitted successfully!</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.first_name ? 'is-invalid' : ''}`}
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                />
                {errors.first_name && <div className="invalid-feedback">{errors.first_name}</div>}
              </div>
              <div className="col-md-6">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.last_name ? 'is-invalid' : ''}`}
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                />
                {errors.last_name && <div className="invalid-feedback">{errors.last_name}</div>}
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Birthday</label>
                <input
                  type="date"
                  className={`form-control ${errors.birthday ? 'is-invalid' : ''}`}
                  name="birthday"
                  value={formData.birthday}
                  onChange={handleChange}
                />
                {errors.birthday && <div className="invalid-feedback">{errors.birthday}</div>}
              </div>
              <div className="col-md-6">
                <label className="form-label">Gender</label>
                <div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="male"
                      value="Male"
                      checked={formData.gender === 'Male'}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="male">Male</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="female"
                      value="Female"
                      checked={formData.gender === 'Female'}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="female">Female</label>
                  </div>
                </div>
                {errors.gender && <div className="text-danger small">{errors.gender}</div>}
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <div className="col-md-6">
                <label className="form-label">Phone Number</label>
                <input
                  type="text"
                  className={`form-control ${errors.phone_number ? 'is-invalid' : ''}`}
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                />
                {errors.phone_number && <div className="invalid-feedback">{errors.phone_number}</div>}
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Subject</label>
              <select
                className={`form-select ${errors.subject ? 'is-invalid' : ''}`}
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              >
                <option value="">Choose option</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Technical Support">Technical Support</option>
                <option value="Billing">Billing</option>
                <option value="Other">Other</option>
              </select>
              {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary px-5">Submit</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default FourthAssignmenta;