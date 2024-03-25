import React, { useState } from 'react';

const MyForm = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: ''
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
    console.log('Form submitted:', formData);

    alert('Form data submitted!');
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
