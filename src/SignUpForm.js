import React from 'react';
import useForm from './hooks/useForm';

const SignUpForm = () => {
  const submitForm = () => {
    console.log('Form submitted:', values);
  };

  const { values, handleChange, handleSubmit } = useForm({ username: '', email: '' }, submitForm);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input name="username" value={values.username} onChange={handleChange} />
      </div>
      <div>
        <label>Email:</label>
        <input name="email" value={values.email} onChange={handleChange} />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
