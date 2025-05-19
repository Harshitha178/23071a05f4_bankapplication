import React, { useState } from 'react';

function Registration() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration successful for ' + formData.username);
    // In real app, send data to backend here
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div>
          <label>Email: </label>
          <input name="email" type="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password: </label>
          <input name="password" type="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;
