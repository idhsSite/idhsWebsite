import React, { useState, useEffect } from 'react';


const UserInteractionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    suggestions: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
  });

  const [submissionMessage, setSubmissionMessage] = useState('');

  useEffect(() => {
    if (submissionMessage) {
      // Reset the form after a submission message is displayed
      setFormData({
        name: '',
        email: '',
        suggestions: '',
      });

      // Clear submission message after a certain time (e.g., 3 seconds)
      const timeoutId = setTimeout(() => {
        setSubmissionMessage('');
      }, 3000);

      // Clear the timeout when the component is unmounted
      return () => clearTimeout(timeoutId);
    }
  }, [submissionMessage]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Basic validation example (you can enhance it based on your requirements)
    if (name === 'name' && value.trim() === '') {
      setFormErrors({ ...formErrors, name: 'Name is required' });
    } else if (name === 'email' && !/^\S+@\S+\.\S+$/.test(value)) {
      setFormErrors({ ...formErrors, email: 'Invalid email address' });
    } else {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the entire form before submission
    if (Object.values(formErrors).every((error) => !error)) {
        // Perform the submission logic (e.g., API request)
        // For now, we'll simulate a submission with a success message
        setSubmissionMessage('Form submitted successfully!');
      } else {
        setSubmissionMessage('Please fix the form errors before submitting.');
      }
    }

  return (
    <div>
      <h2>Suggest us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <div className="error-message">{formErrors.name}</div>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <div className="error-message">{formErrors.email}</div>
        </div>
        <div>
          <label htmlFor="suggestions">Your Suggestions:</label>
          <textarea
            id="suggestions"
            name="suggestions"
            value={formData.suggestions}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="submission-message">{submissionMessage}</div>
    </div>
  );
};

export default UserInteractionForm;
