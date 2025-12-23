import React from 'react';

export default function Input({ value, onChange, placeholder = '', type = 'text', className = '' }) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      className={`border px-3 py-2 rounded ${className}`}
    />
  );
}
