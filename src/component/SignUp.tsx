import React, { useState } from 'react';

const MySignUpForm = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password:''
  });

   // Handler to update form data when inputs change
   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handler for form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    // Do something with the form data, e.g., send it to the server
    console.log('Signed up successfully:', formData);

    alert('Signed up successfully!');
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstname">FirstName:</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={formData.firstname}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="lastname">Lastname:</label>
        <input
          type="string"
          id="lastname"
          name="lastname"
          value={formData.lastname}
          onChange={handleInputChange}
        />
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
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MySignUpForm;
