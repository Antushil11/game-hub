import React from "react";

const FeaturedGame = () => {
  const game = {
    title: "Shadow Fight 4: Arena",
    image: "https://i.ibb.co.com/CpJCsq73/94bac654-3ad3-4f5b-816b-f2f00068704b.jpg",
    category: "Fighting",
    rating: "4.6",
    description:
      "Shadow Fight 4: Arena brings intense action-packed martial arts combat with stunning visuals, smooth controls, and unique heroes with powerful abilities.",
    download: "https://shadowfight.com/",
  };

  return (
    <div className="py-16  text-white">
      <div className=" mx-auto">
        <h2 className="text-2xl font-bold text-gray-400 mb-6 text-center">
          Featured Game of the Week
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center bg-black p-8 rounded-2xl shadow-xl ">
          <img
            src={game.image}
            alt={game.title}
            className="rounded-xl shadow-lg w-full"
          />

          <div>
            <h3 className="text-3xl font-bold mb-3">{game.title}</h3>
            <p className=" font-semibold mb-2">
              Category: {game.category}
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {game.description}
            </p>
            <p className="text-orange-400 font-bold text-xl mb-6">
              Rating: {game.rating}/5
            </p>

            <a
              href={game.download}
              target="_blank"
              rel="noreferrer"
              className="btn bg-primary text-whinpm install react-icons --savete font-semibold cursor-pointer hover:bg-amber-800 "
            >
              Download Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedGame;
