import React from 'react';
import RegisterForm from '../components/auth/RegisterForm';

export default function Register() {
  return (
    <div className="max-w-md mx-auto mt-24">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <RegisterForm />
    </div>
  );
}
