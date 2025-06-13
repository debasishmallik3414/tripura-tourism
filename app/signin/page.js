'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      setMessage('Redirecting...');
      setTimeout(() => router.push('/'), 1000);
    } else {
      setMessage('Please fill all fields');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-8"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="bg-white bg-opacity-20 rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-6xl overflow-hidden">
        {/* Left Panel */}
        <div className="w-full md:w-1/2 p-8 md:p-10 bg-[rgba(0,100,0,0.6)] text-white">
          <h2 className="text-3xl font-bold mb-4">Tripura <span className="text-cyan-300">TOURISM</span></h2>
          <p className="mb-6 text-sm md:text-base">Tripura Tourism Web Application</p>
          <button className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded text-sm md:text-base">
            Learn more
          </button>
          <p className="mt-10 text-xs md:text-sm">
            Powered by Your Team Name<br />© 2025 Tripura Tourism
          </p>
        </div>

        {/* Right Panel - Sign In Form */}
        <div className="w-full md:w-1/2 p-8 md:p-10 bg-white bg-opacity-70">
          <h2 className="text-2xl font-bold text-green-700 mb-6 text-center md:text-left">Sign In</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition text-sm md:text-base"
            >
              Sign In
            </button>
            {message && <p className="text-sm text-center text-gray-700">{message}</p>}
          </form>

          <p className="mt-4 text-sm text-center">
            Don't have an account?{' '}
            <a href="/signup" className="text-blue-600 hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
