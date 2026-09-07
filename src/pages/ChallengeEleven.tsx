import React, { useState } from 'react';

export default function ChallengeEleven() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const validateFields =
    name && email.includes('@') && password.length > 8 ? true : false;

    const resetFields = () => {
        setError(null)
        setSuccess(false)
        setName('')
        setEmail('')
        setPassword('')
}

  const addUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json)
      .then(() => setSuccess(true))
      .catch(() => setError('Problem submitting user, please try again'))
      .finally(() => setIsSubmitting(false));
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    if (validateFields) {
      setIsSubmitting(true);
        addUser();
        resetFields()
    }
  };

  return (
    <div>
      <h2>Create a User form</h2>
      <h3>Create a user form with name, email, password, confirm password</h3>
      <p>
        Requirements: controlled inputs, TypeScript types, required-field
        validation, email validation, password length validation, password
        confirmation validation, field-level error messages, disabled submit
        while submitting, fake/API POST request, server error handling, success
        message, prevent duplicate submissions
      </p>
      <form onSubmit={handleCreateUser}>
        <input
          type='text'
          value={name}
          placeholder='Name'
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          value={email}
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          value={password}
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' disabled={!validateFields}>
          Crreate User
        </button>
      </form>
      {success && !isSubmitting && !name && <p>Successfully created a new user!</p>}
      {error && !isSubmitting && <p>{error}</p>}
          {isSubmitting && validateFields && <p>Submitting new user request... </p>}
          {!validateFields && name && email && password && <p>Please validate all fields</p>}
    </div>
  );
}
