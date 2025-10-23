import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import GameDetailsCard from "./GameDetailsCard";
import { useLoaderData, useParams } from "react-router";
import MyContainer from "../components/MyContainer";

const GameDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [games, setGames] = useState({});
  // console.log(data,id,games)

  useEffect(() => {
    const gamesDetails = data.find((singleNews) => singleNews.id == id);
    setGames(gamesDetails);
  }, [data, id]);
  return (
    <div className="">
      <header>
        <Navbar></Navbar>
      </header>
      <MyContainer>
        <main className="min-h-screen">
          <GameDetailsCard games={games}></GameDetailsCard>
        </main>
      </MyContainer>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default GameDetails;
