'use client';

import { useState } from 'react';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-8"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="bg-white bg-opacity-40 rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-6xl overflow-hidden">
        {/* Left Panel */}
        <div className="w-full md:w-1/2 p-8 md:p-10 bg-[rgba(0,100,0,0.6)] text-white">
          <h2 className="text-3xl font-bold mb-4">TRIPURA<span className="text-cyan-300">TOURISM</span></h2>
          <p className="mb-6 text-sm md:text-base">TRIPURA Tourism Web Application</p>
          <button className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded text-sm md:text-base">
            Learn more
          </button>
          <p className="mt-10 text-xs md:text-sm">
            Powered by Tripura Tourism<br />Copyright © Govt. of Tripura
          </p>
        </div>

        {/* Right Panel - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-10 bg-white bg-opacity-70">
          <h2 className="text-2xl font-bold text-green-700 mb-6 text-center md:text-left">Sign Up</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Fields */}
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
                required
                className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                required
                className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded"
              />
            </div>

            {/* Phone Field */}
            <div className="flex flex-col sm:flex-row gap-2">
              <select
                className="px-2 py-2 border border-gray-300 rounded w-full sm:w-[35%]"
                defaultValue="IND +91"
              >
                <option>IND +91</option>
                <option>USA +1</option>
              </select>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>

            {/* Email Field */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white py-2 px-4 w-full rounded text-sm md:text-base"
            >
              Continue
            </button>

            <p className="text-xs text-gray-600 italic mt-2 text-center md:text-left">
              * For International Tourists, OTP and other notifications shall be sent via email
            </p>
          </form>

          {/* Signin Link */}
          <p className="mt-4 text-sm text-center">
            Already have an account?{' '}
            <a href="/signin" className="text-blue-600 hover:underline">Signin</a>
          </p>
        </div>
      </div>
    </div>
  );
}
