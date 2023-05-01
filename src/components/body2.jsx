import React, { useEffect, useState } from "react";
import './../css/body2.css'

const Body2 = () => {

  return (
    <>
      <div>
        <section className="body2 pt-20 mt-60">
            <div className="container">
                <div className="row">
                    <div className="timeline-wrap">
                        <div className="timeline">
                        <h1>Enjoy on your TV.</h1>
                        <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                        </div>
                    </div>
                    <div className="img-wrap relative">
                    <img src={require('./../image/body/tv.png')} className='absolute tv' alt="" />
                    <img src={require('./../image/body/body2.png')} className='absolute watching' alt="" />
                    </div>
                </div>
            </div>
        </section>
      </div>
    </>
  );
};

export default Body2;