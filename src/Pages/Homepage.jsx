import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

import MyContainer from "../components/MyContainer";
import GameCard from "../components/GameCard";
import Games from "./Games";
import useProducts from "../Hooks/useProducts";
import Newsletter from "./Newsletter";
import Testimonials from "./Testimonials";
import FeaturedGame from "./FeaturedGame";
import LatestNews from "./LatestNews";

const Homepage = () => {
  //   const games = useLoaderData();
  

  const {products} = useProducts();

  const topRatedGames = [...products]
    .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
    .slice(0, 4);

  return (
    <div>
      <MyContainer>
        <Banner />
        <section className="py-10 ">
          <h2 className="text-2xl font-bold text-gray-400 mb-6 text-center">
            Top Rated Games
          </h2>
          <div className="grid    grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {topRatedGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </section>
        {/* <Newsletter></Newsletter> */}
        <Testimonials></Testimonials>
        <FeaturedGame></FeaturedGame>
        <LatestNews></LatestNews>
      </MyContainer>
    </div>
  );
};

export default Homepage;
