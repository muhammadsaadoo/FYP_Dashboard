import React, { useState } from "react";

const AdminLoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-90 bg-cover bg-center" style={{ backgroundImage: `url(/path_to_your_image.jpg)` }}>
      <div className=" bg-gray-90 bg-opacity-4 rounded-1xl p-8 w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-white bg-opacity-70 dark:bg-zinc-500 dark:bg-opacity-70 shadow-2xl rounded-2xl overflow-hidden "
        >
          <div className="px-8 py-10 md:px-10">
            <h2 className="text-4xl font-extrabold text-center text-zinc-800 dark:text-white">
              Admin Login
            </h2>
            <p className="text-center text-zinc-600 dark:text-zinc-400 mt-3">
              Enter your credentials to access the dashboard
            </p>
            <div className="mt-10">
              <div className="relative">
                <label
                  className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200"
                  htmlFor="username"
                >
                  Email
                </label>
                <input
                  placeholder="Enter your Email"
                  className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
                  name="username"
                  id="username"
                  type="email"
                  
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mt-6">
                <label
                  className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  placeholder="••••••••"
                  className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
                  name="password"
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mt-10">
                <button
                  className="w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-4 focus:ring-blue-400 dark:focus:ring-blue-800"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
          <div className="px-8 py-4 bg-blue-200 dark:bg-zinc-800">
            <div className="text-sm text-blue-900 dark:text-blue-300 text-center">
              
             
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginForm;
