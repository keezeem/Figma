'use client';

import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Example() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    address: '',
    agreed: false,
  });
  const [error, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSwitchChange = (value) => {
    setFormData({ ...formData, agreed: value });
  };

  const handlePasswordVisibilityToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      phoneNumber,
      address,
      agreed,
    } = formData;

    // Validate form fields
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !phoneNumber ||
      !address ||
      !agreed
    ) {
      setError('Please fill all the fields and agree to the privacy policy.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setError('');
    console.log('Form submitted successfully:', formData);

    // Navigate to the dashboard
    navigate('/dashboard');
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      {/* Logo Section */}
      <div className="absolute top-6 left-6">
        <div className="flex h-16 shrink-0 items-center">
          <Link to="/">
            <img className="h-10 w-auto" src={logo} alt="Your Company" />
          </Link>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
        style={{
            clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            backgroundImage: 'linear-gradient(to top right, #03611C, #03611C)',
        }}
        className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Sign Up
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Join us today and start exploring all the benefits we have to offer.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900">
              First name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleInputChange}
              className="block w-full mt-2 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-green-600"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900">
              Last name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleInputChange}
              className="block w-full mt-2 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-green-600"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="block w-full mt-2 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-green-600"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-900">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={passwordVisible ? 'text' : 'password'}
                value={formData.password}
                onChange={handleInputChange}
                className="block w-full mt-2 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-green-600"
              />
              <button
                type="button"
                onClick={handlePasswordVisibilityToggle}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
              >
                {passwordVisible ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-900">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={passwordVisible ? 'text' : 'password'}
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="block w-full mt-2 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-green-600"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-900">
              Phone number
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="block w-full mt-2 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-green-600"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="address" className="block text-sm font-semibold text-gray-900">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              rows={2}
              value={formData.address}
              onChange={handleInputChange}
              className="block w-full mt-2 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-green-600"
            />
          </div>

          <div className="flex gap-x-4 sm:col-span-2">
            <Switch
              checked={formData.agreed}
              onChange={handleSwitchChange}
              className={`${
                formData.agreed ? 'bg-green-600' : 'bg-gray-200'
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span
                className={`${
                  formData.agreed ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
            <span className="text-sm text-gray-600">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-green-600">
                privacy policy
              </a>
              .
            </span>
          </div>
        </div>

        {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          className="mt-6 block w-full rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-green-600"
        >
          Join Now
        </button>
      </form>
    </div>
  );
}
