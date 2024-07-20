import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    organizationName: '',
    organizationSize: '',
    industry: '',
    termsAccepted: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents([...students, formData]);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      organizationName: '',
      organizationSize: '',
      industry: '',
      termsAccepted: false
    });
  };

  return (
    <div className="container mt-5">
      <h2>Try Sign free for 14 days</h2>
      <p>
        Already have a Formstack account? <a href="#">Start your trial in app</a>
      </p>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Work Email</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="organizationName" className="form-label">Organization Name</label>
          <input type="text" className="form-control" id="organizationName" name="organizationName" value={formData.organizationName} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="organizationSize" className="form-label">Organization Size</label>
          <select className="form-select" id="organizationSize" name="organizationSize" value={formData.organizationSize} onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="industry" className="form-label">Industry</label>
          <select className="form-select" id="industry" name="industry" value={formData.industry} onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option value="tech">Tech</option>
            <option value="finance">Finance</option>
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
          </select>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="termsAccepted" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} required />
          <label className="form-check-label" htmlFor="termsAccepted">
            I understand and agree to the <a href="#">Formstack Privacy Policy</a>, <a href="#">Software Services Agreement</a>, and <a href="#">Acceptable Use Policy</a>.
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Start free trial</button>
      </form>

      <h3 className="mt-5">Registered Students</h3>
      <ul className="list-group">
        {students.map((student, index) => (
          <li key={index} className="list-group-item">
            {student.firstName} {student.lastName} - {student.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
