import React, { useEffect } from "react";
import "../css/preloader.css";
import { preLoaderAnim } from "../animations";

const PreLoad = () => {
  useEffect(() => {
    preLoaderAnim();

  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        {/* <span>Developer,</span>
        <span>Creator,</span>
        <span>Vibe.</span> */}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default PreLoad;
