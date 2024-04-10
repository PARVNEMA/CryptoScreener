import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import { CryptoProvider } from "../context/CryptoContext";
import { TrendingProvider } from "../context/TrendingContext";
import { StorageProvider } from "../context/StorageContext";
import bg from '../assets/background1.jpg'
import bg1 from '../assets/background.jpg'
const Home = () => {
  return (
    <CryptoProvider>
      <TrendingProvider>
        <StorageProvider>
      <main className=" md:w-full md:h-full flex flex-col content-center items-center text-white font-nunito relative ">
        <div className="bg-gray-300 h-screen w-screen fixed -z-10"
        style={{
        backgroundSize: "cover",
        opacity: "0.85",
        backgroundPosition:"fixed",
        backgroundAttachment:"fixed",
          backgroundImage: `url(${bg1})`}}
        />
        <Logo />
        <Navigation />
        <Outlet />
      </main>
      </StorageProvider>
      </TrendingProvider>
    </CryptoProvider>

  );
};

export default Home;
