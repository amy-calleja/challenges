import React, { useState, useEffect } from 'react';

export default function ChallengeEleven() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!success) {
      return;
    }

    const showSuccess = setTimeout(() => {
      setSuccess(false);
    }, 3000);

    return () => clearTimeout(showSuccess);
  }, [success]);

  const validateFields =
    name.trim() &&
    email.includes('@') &&
    password.length >= 8 &&
    password === passwordConfirm
      ? true
      : false;

  const errors = {
    name: !name.trim() ? 'Name is required' : '',
    email: !email.includes('@') ? 'Invalid email' : '',
    password:
      password.length < 8 ? 'Password must be at least 8 characters' : '',
    passwordConfirm: password !== passwordConfirm ? 'Passwords must match' : '',
  };

  const resetFields = () => {
    setError(null);
    setName('');
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
  };

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
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to create user');
        }
        return response.json();
      })
      .then(() => {
        setSuccess(true);
        resetFields();
      })
      .catch(() => setError('Problem submitting user, please try again'))
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleCreateUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateFields) {
      setIsSubmitting(true);
      addUser();
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
          required
          value={name}
          placeholder='Name'
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          required
          value={email}
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          required
          value={password}
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type='password'
          required
          value={passwordConfirm}
          placeholder='Confirm Password'
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <button type='submit' disabled={!validateFields}>
          Crreate User
        </button>
      </form>
      {success && <p className='success'>Successfully created a new user!</p>}
      {error && !isSubmitting && <p>{error}</p>}
      {isSubmitting && validateFields && <p>Submitting new user request... </p>}

      {/* error msgs */}
      {errors.name && <p>{errors.name}</p>}
      {errors.email && <p>{errors.email}</p>}
      {errors.password && <p>{errors.password}</p>}
      {errors.passwordConfirm && <p>{errors.passwordConfirm}</p>}
    </div>
  );
}
