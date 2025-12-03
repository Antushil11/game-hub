import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">About GameHub</h1>
        <p className="text-lg mb-4">
          Welcome to <span className="text-orange-500 font-semibold">GameHub</span>, your ultimate
          destination for discovering, playing, and staying updated with the latest games.
        </p>
        <p className="text-lg mb-4">
          GameHub brings together gamers from around the world. We provide curated game lists, reviews, news, and exclusive content covering all genres: Action, RPG, FPS, Puzzle, MOBA, and more.
        </p>
        <p className="text-lg mb-4">
          Explore detailed game pages, check ratings, read player reviews, and get tips to enhance your gaming experience. We support games on PC, Console, and Mobile platforms.
        </p>
        <p className="text-lg mb-4">
          Join our community to participate in discussions, tournaments, and challenges. Stay connected with newsletters and never miss exciting updates from the gaming world.
        </p>
        <p className="text-lg">
          GameHub is built by gamers, for gamers—your one-stop hub for everything gaming!
        </p>
      </div>
    </div>
  );
};

export default About;
