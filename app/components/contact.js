'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import {
  UserIcon,
  EnvelopeIcon,
  PencilSquareIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/solid';

const TripuraMap = dynamic(() => import('./TripuraMap'), { ssr: false });

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setSubmitted(false);

    try {
      const response = await fetch('https://sheetdb.io/api/v1/jbcjg2wo54bf6', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: formData }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => setSubmitted(false), 3000);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };

  return (
    <section id="contact" className="py-12 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Get in Touch
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:h-[500px]">
        {/* Map Section */}
        <div className="w-full h-full rounded-lg overflow-hidden shadow-md">
          <TripuraMap />
        </div>

        {/* Contact Form Section */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md space-y-6 h-full flex flex-col justify-between"
        >
          <div className="space-y-6">
            <div className="relative">
              <UserIcon className="absolute w-5 h-5 text-gray-400 left-3 top-3.5" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 focus:outline-none"
              />
            </div>

            <div className="relative">
              <EnvelopeIcon className="absolute w-5 h-5 text-gray-400 left-3 top-3.5" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 focus:outline-none"
              />
            </div>

            <div className="relative">
              <PencilSquareIcon className="absolute w-5 h-5 text-gray-400 left-3 top-3.5" />
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-semibold py-3 rounded-md hover:bg-green-800 transition"
            >
              Send Message
            </button>

            {submitted && (
              <div className="flex items-center text-green-700 bg-green-100 p-3 rounded-md mt-2 text-sm">
                <CheckCircleIcon className="w-5 h-5 mr-2" />
                Message sent successfully!
              </div>
            )}

            {error && (
              <div className="text-red-600 text-sm mt-2">
                Failed to send. Try again later.
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
