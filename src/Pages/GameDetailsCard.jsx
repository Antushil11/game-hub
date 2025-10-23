import React from 'react';
import { Link } from 'react-router';

const GameDetailsCard = ({ games }) => {
  return (
    <div className="bg-gray-800 mt-8 text-white rounded-2xl shadow-lg p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center">
      <div className=''>
        <img
          src={games.coverPhoto}
          alt={games.title}
          className="w-full flex items-center justify-center rounded-xl shadow-md"
        />
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-3">{games.title}</h2>
        <p className="text-gray-300 mb-5">{games.description}</p>
        <p className="text-gray-400 mb-2">
          <span className="font-semibold text-gray-200">Category:</span> {games.category}
        </p>
        <p className="text-gray-400 mb-2">
          <span className="font-semibold text-gray-200">Developer:</span> {games.developer}
        </p>
        <p className="text-gray-400 mb-6">
          <span className="font-semibold text-gray-200">Ratings:</span> ⭐ {games.ratings} / 5
        </p>
        <a
          href={games.downloadLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary inline-block mr-4 hover:bg-amber-900  text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200"
        >
          Download Now
        </a>
        <Link to={"/"} className='btn btn-primary inline-block hover:bg-amber-900  text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200'>Home Page</Link>
      </div>
    </div>
  );
};

export default GameDetailsCard;
