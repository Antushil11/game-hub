import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#121212] text-white">
      <h1 className="text-[120px] font-bold">
        <span className="text-gray-500">4</span>
        <span className="text-amber-500 drop-shadow-[0_0_10px_#f59e0b]">0</span>
        <span className="text-gray-500">4</span>
        
      </h1>
      
      
      <p className="text-gray-400 text-center mb-6 px-4">
        The page you are looking for might have been removed,<br />
        had its name changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="border border-gray-400 px-6 py-2 text-sm uppercase tracking-wide hover:bg-amber-500 hover:border-amber-500 transition duration-300"
      >
        Home Page
      </Link>
    </div>
  );
};

export default ErrorPage;
