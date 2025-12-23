import React from 'react';

export default function Button({ children, onClick, className = '', type = 'button' }) {
  return (
    <button type={type} onClick={onClick} className={`px-4 py-2 rounded bg-blue-600 text-white ${className}`}>
      {children}
    </button>
  );
}
