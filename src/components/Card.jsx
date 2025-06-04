import React from 'react';

export default function Card({ title, description }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 transition hover:shadow-lg">
      <h2 className="text-lg font-semibold mb-1">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

