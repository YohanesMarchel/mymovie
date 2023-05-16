import { FiTv } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import "./../css/detailmovie.css";
import logo from "./../image/img1.jpg";
import { FiStar } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
const DetailMovie = (props) => {
  return (
    <>
      <>
        <div className="detailmv-container">
          <div className="card-detail-movie">
            <div className="img-wrap">
              <img src={logo} className="" />
            </div>
            <div className="dec">
              <p className="mv-title text-3xl text-blue-500 ">
                Dungeons & Dragons: Honor Among Thieves
              </p>
              <h2 className="text-1xl">
                <FiStar />
                7.8
              </h2>
              <span>23-04-2021</span>
              <p className="mv-slug">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates aliquid laborum totam quia atque nam, doloremque fuga
                aspernatur id quibusdam!
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates aliquid laborum totam quia atque nam, doloremque fuga
                aspernatur id quibusdam!
              </p>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default DetailMovie;
