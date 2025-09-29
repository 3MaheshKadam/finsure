"use client";
import React, { useState } from 'react';
import { Lock } from 'lucide-react';

const AdminLogin = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'Finsure@2025') {
      setError(null);
      onLogin();
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <Lock className="h-10 w-10 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900 ml-2">Admin Login</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter admin password"
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;