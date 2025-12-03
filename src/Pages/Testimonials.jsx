import React from "react";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Casual Gamer",
      comment:
        "GameHub is my favorite place to discover new games. The UI is clean and everything is easy to find!",
      photo:
        "https://i.ibb.co.com/WmqVmck/Untitled.jpg",
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Esports Player",
      comment:
        "Amazing platform! I love how GameHub recommends trending games every week.",
      photo:
        "https://i.ibb.co.com/VcWdjfcx/premium-photo-1664392134807-c9c7aca42671-q-80-w-878-auto-format-fit-crop-ixlib-rb-4-1.jpg",
    },
    {
      id: 3,
      name: "David Smith",
      role: "Game Reviewer",
      comment:
        "The best site for game information. The newsletter feature keeps me updated every day.",
      photo:
        "https://i.ibb.co.com/bj69Xkys/images.jpg",
    },
  ];

  return (
    <div className="bg-black rounded-2xl py-16 px-4 text-white">
      <div className=" mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-400 mb-6 text-center">What Gamers Say</h2>

        <div className="grid gap-10 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:scale-105 transition"
            >
              <img
                src={review.photo}
                alt={review.name}
                className="w-28 h-28 rounded-full mx-auto mb-4 border-2 border-orange-500"
              />

              <p className="text-gray-300 italic mb-4">"{review.comment}"</p>

              <h3 className="text-xl font-semibold">{review.name}</h3>
              <p className="text-orange-400">{review.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
