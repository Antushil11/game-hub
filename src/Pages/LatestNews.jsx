import React from "react";

const LatestNews = () => {
  return (
    <div className="bg-black text-white py-16 px-4 rounded-2xl mb-6">
      <div className=" mx-auto">
        <h2 className="text-2xl font-bold text-gray-400 mb-6 text-center">Latest Gaming News</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-xl">
            <img
              src="https://i.ibb.co.com/99CsZWP5/i1742327309884505.jpg"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">New PUBG Update Released</h3>
            <p className="text-gray-300 text-sm">
              PUBG Mobile introduces a new map, enhanced graphics, and improved gameplay.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <img
              src="https://i.ibb.co.com/n8qNY9vD/13926-Free-Fire1.jpg"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Free Fire Adds New Characters</h3>
            <p className="text-gray-300 text-sm">
              Free Fire releases new characters, abilities, and a new ranked season update.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <img
              src="https://i.ibb.co.com/9m6wSXRQ/Jason-and-Lucia-02-With-Logos-landscape.jpg"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">GTA VI Official Trailer Drops</h3>
            <p className="text-gray-300 text-sm">
              Rockstar Games reveals the first look of GTA VI with stunning visuals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
