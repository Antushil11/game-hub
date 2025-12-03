import React from "react";

import MyContainer from "../components/MyContainer";
import Banner from "../components/Banner";
import useProducts from "../Hooks/useProducts";
import GameCard from "../components/GameCard";

const Games = () => {
    const {products} = useProducts();
  

  return (
    <div>
      <MyContainer>
       
        <section className="py-10 px-4">
          <h2 className="text-2xl font-bold text-gray-400 mb-6 text-center">
            All Games 
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </section>
      </MyContainer>
    </div>
  );
};

export default Games;
