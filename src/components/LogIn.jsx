import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import google from '../assets/google.png';

const LogIn = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGoogleResponse = (response) => {
    console.log('Encoded JWT ID token:', response.credential);
    // Handle login with Google response
  };

  const handleCustomGoogleSignIn = () => {
    /* global google */
    if (window.google) {
      google.accounts.id.prompt(); // Initiates the Google Sign-In flow
    }
  };

  useEffect(() => {
    /* global google */
    if (window.google) {
      google.accounts.id.initialize({
        client_id: 'YOUR_GOOGLE_CLIENT_ID',
        callback: handleGoogleResponse,
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data and simulate a successful login
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email && password) {
      // Replace this with actual authentication logic
      console.log('Email:', email, 'Password:', password);
      navigate('/dashboard'); // Navigate to Dashboard after successful login
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="isolate bg-gray-50 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Member Login
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Log in to access your account, or use Google to sign in.
        </p>
      </div>

      <form
        onSubmit={handleSubmit} // Handle form submission
        className="mx-auto mt-8 max-w-xl sm:mt-12 bg-white p-8 shadow-md rounded-lg"
      >
        {/* Email */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Email
          </label>
          <div className="mt-2.5">
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-green-600"
            />
          </div>
        </div>
        {/* Password */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Password
          </label>
          <div className="mt-2.5">
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-green-600"
            />
          </div>
        </div>
        {/* Forgot Password */}
        <div className="text-sm text-right mb-6">
          <a
            href="/forgotten-password"
            className="text-green-600 hover:underline"
          >
            Forgot your password?
          </a>
        </div>
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="block w-full rounded-md bg-green-600 px-4 py-2 text-white shadow-sm hover:bg-green-600 focus:ring-2 focus:ring-green-600"
          >
            Log In
          </button>
          <div className="flex flex-col items-center mt-6">
            {/* Custom Google Button */}
            <button
              type="button"
              onClick={handleCustomGoogleSignIn}
              className="flex items-center justify-center w-[500px] h-12 border border-gray-300 bg-white rounded-lg shadow-md hover:bg-gray-100"
            >
              <img src={google} alt="Google Logo" className="h-6 w-6 mr-3" />
              <span className="text-sm font-medium text-gray-700">
                Continue with Google
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
