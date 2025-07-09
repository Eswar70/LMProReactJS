import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/reducers/userSlice';

import Layout from '../components/layout/Layout';

const Settings = () => {
  const [formData, setFormData] = useState(() => {
  const saved = localStorage.getItem('userSettings');
  return saved ? JSON.parse(saved) : { name: '', email: '', region: '', sales: 0 };
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';

    return newErrors;
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
    dispatch(setUser(formData)); 
    localStorage.setItem('userSettings', JSON.stringify(formData));
  };

  return (
    <Layout>
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow w-full max-w-md">
        <h2 className="text-xl font-bold text-gray-700 dark:text-white mb-4">User Settings</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border rounded text-black"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-2 border rounded text-black"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">Region</label>
            <input
              type="text"
              value={formData.region}
              onChange={(e) => setFormData({ ...formData, region: e.target.value })}
              className="w-full px-3 py-2 border rounded text-black"
            />
            {errors.region && <p className="text-red-500 text-sm">{errors.region}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">Sales</label>
            <input
              type="number"
              value={formData.sales}
              onChange={(e) => setFormData({ ...formData, sales: e.target.value })}
              className="w-full px-3 py-2 border rounded text-black"
            />
            {errors.sales && <p className="text-red-500 text-sm">{errors.sales}</p>}
          </div>

          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">
            Update
          </button>
          {submitted && <p className="text-green-500 text-sm mt-2">Preferences saved!</p>}
        </form>
      </div>
    </Layout>
  );
};

export default Settings;
