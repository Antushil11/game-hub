import React from "react";
import { FaStar } from "react-icons/fa";

const GameCard = ({ game }) => {
  const { title, coverPhoto, category, ratings, developer, downloadLink, description } = game;

  return (
    <div className="bg-black   border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
      <img src={coverPhoto} alt={title} className="w-full h-88 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-white mb-1 ">{title}</h2>
        <p className="text-white text-sm mb-2">{category} • {developer}</p>
        <p className="text-white text-sm mb-3">
          {description.length > 80 ? `${description.slice(0, 80)}...` : description}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-orange-400">
            <FaStar className="mr-1" />
            <span className="font-medium text-white">{ratings}</span>
          </div>
          <a
            href={downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-medium text-sm hover:underline"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default GameCard;

