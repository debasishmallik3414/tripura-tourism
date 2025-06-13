'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function BookingPage() {
  const { id } = useParams();
  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    nights: 1,
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for Hotel #${id}\nName: ${form.name}`);
  };

  return (
    <div className="min-h-screen pt-24 px-4 pb-12 bg-gradient-to-br from-white to-green-50">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">Book Your Hotel</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
            required
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
            required
          />
          <input
            type="number"
            name="nights"
            placeholder="Number of Nights"
            value={form.nights}
            min="1"
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}
