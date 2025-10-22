import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import {} from "react-router";
import MyContainer from "../components/MyContainer";
import GameCard from "../components/GameCard";
import Games from "./Games";
import useProducts from "../Hooks/useProducts";
import Newsletter from "./Newsletter";

const Homepage = () => {
  //   const games = useLoaderData();

  const {products} = useProducts();

  const topRatedGames = [...products]
    .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
    .slice(0, 3);

  return (
    <div>
      <MyContainer>
        <Banner />
        <section className="py-10 px-4">
          <h2 className="text-2xl font-bold text-gray-400 mb-6 text-center">
            Top Rated Games
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topRatedGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </section>
        <Newsletter></Newsletter>
      </MyContainer>
    </div>
  );
};

export default Homepage;
