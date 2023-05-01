import React, { useEffect, useState } from "react";
import './../css/body3.css'

const Body3 = () => {

  return (
    <>
      <div>
        <section className="body3 pt-40 mt-2">
            <div className="container">
                <div className="row">
                    <div className="img-wrap relative">
                    <img src={require('./../image/body/responsive.jpg')} className='absolute gadget' alt="" />
                    </div>
                    <div className="timeline-wrap">
                        <div className="timeline">
                            <h1>Watch everywhere.</h1>
                            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    </>
  );
};

export default Body3;