import React, { useEffect, useState } from "react";
import "./../css/detailmovie.css";
import logo from "./../image/img1.jpg";
import { FiStar } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";

const DetailMovie = () => {
  return (
    <>
      <main className="detailmovie">
        <div className="card-detail-movie bg-white">
          <h1 className="text-4xl text-blue-500 ">Dungeons & Dragons: Honor Among Thieves</h1>
          <img src={logo} className="" />
          <h2 className="text-1xl"><FiStar/>7.8</h2>
          <h3 className="text-1xl"><FiCalendar/>23-09-2022</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aliquid laborum totam quia atque nam, doloremque fuga aspernatur id quibusdam!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aliquid laborum totam quia atque nam, doloremque fuga aspernatur id quibusdam!</p>
        </div>
      </main>
    </>
  );
};

export default DetailMovie;
