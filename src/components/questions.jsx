import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import "./../css/ques.css";
import { CSSTransition } from "react-transition-group";

const Ques = () => {
  const [dropdownDisplay, setDropdowDisplay] = useState(false);
  const [iconAnimated, setIconAnimated] = useState(false);
  const dropDown = () => {
    setDropdowDisplay(!dropdownDisplay);
    setIconAnimated(!iconAnimated);
  };
  const [dropdownDisplay2, setDropdowDisplay2] = useState(false);
  const [iconAnimated2, setIconAnimated2] = useState(false);
  const dropDown2 = () => {
    setDropdowDisplay2(!dropdownDisplay2);
    setIconAnimated2(!iconAnimated2);
  };
  const [dropdownDisplay3, setDropdowDisplay3] = useState(false);
  const [iconAnimated3, setIconAnimated3] = useState(false);
  const dropDown3 = () => {
    setDropdowDisplay3(!dropdownDisplay3);
    setIconAnimated3(!iconAnimated3);
  };
  const [dropdownDisplay4, setDropdowDisplay4] = useState(false);
  const [iconAnimated4, setIconAnimated4] = useState(false);
  const dropDown4 = () => {
    setDropdowDisplay4(!dropdownDisplay4);
    setIconAnimated4(!iconAnimated4);
  };
  const [dropdownDisplay5, setDropdowDisplay5] = useState(false);
  const [iconAnimated5, setIconAnimated5] = useState(false);
  const dropDown5 = () => {
    setDropdowDisplay5(!dropdownDisplay5);
    setIconAnimated5(!iconAnimated5);
  };
  const [dropdownDisplay6, setDropdowDisplay6] = useState(false);
  const [iconAnimated6, setIconAnimated6] = useState(false);
  const dropDown6 = () => {
    setDropdowDisplay6(!dropdownDisplay6);
    setIconAnimated6(!iconAnimated6);
  };

  return (
    <>
      <section className="ques">
        <h1>Question</h1>
        <div className="ques-wrap">
          <div className="card-wrap">
            <div className="sub-card" onClick={dropDown}>
              <h2>What is MyMovie?</h2>
              <FiPlus className={iconAnimated ? "icon active" : "icon"} />
            </div>
            <CSSTransition
              in={dropdownDisplay}
              unmountOnExit
              timeout={500}
              classNames="main"
            >
              <div
                className={
                  dropdownDisplay ? "sub-dropdown active" : "sub-dropdown"
                }
              >
                <h2>
                  MyMovie is ​​a streaming service that offers award-winning TV
                  shows, movies, anime, documentaries and more on thousands of
                  Internet-connected devices.
                  <br />
                  <br />
                  You can watch to your heart's content, whenever you want,
                  without a single ad - all for one low monthly price. There's
                  always something new to watch and new TV shows and movies
                  added every week!
                </h2>
              </div>
            </CSSTransition>
          </div>
          <div className="card-wrap">
            <div className="sub-card" onClick={dropDown2}>
              <h2>How much does MyMovie subscription cost?</h2>
              <FiPlus className={iconAnimated2 ? "icon active" : "icon"} />
            </div>
            <div
              className={
                dropdownDisplay2 ? "sub-dropdown active" : "sub-dropdown"
              }
            >
              <h2>
                Watch MyMovie on your smartphone, tablet, Smart TV, laptop or
                streaming device, all for one fixed monthly price. Prices range
                from IDR 54,000 to IDR 186,000 per month. No extra fees, no
                contracts.
              </h2>
            </div>
          </div>
          <div className="card-wrap">
            <div className="sub-card" onClick={dropDown3}>
              <h2>Where can I watch?</h2>
              <FiPlus className={iconAnimated3 ? "icon active" : "icon"} />
            </div>
            <div
              className={
                dropdownDisplay3 ? "sub-dropdown active" : "sub-dropdown"
              }
            >
              <h2>
                Watch anywhere, anytime. Sign in to your MyMovie account to
                watch live on netflix.com from a personal computer or on any
                Internet-connected device that supports the Netflix app,
                including smart TVs, smartphones, tablets, streaming media
                players, and game consoles.
                <br />
                <br /> You can also download your favorite shows with the iOS,
                Android, or Windows 10 apps. Use downloads to watch when you're
                on the go and don't have an Internet connection. Take Netflix
                anywhere.
              </h2>
            </div>
          </div>
          <div className="card-wrap">
            <div className="sub-card" onClick={dropDown4}>
              <h2>How to cancel it?</h2>
              <FiPlus className={iconAnimated4 ? "icon active" : "icon"} />
            </div>
            <div
              className={
                dropdownDisplay4 ? "sub-dropdown active" : "sub-dropdown"
              }
            >
              <h2>
                MyMovie is ​​flexible. No annoying contracts and no commitments.
                You can easily cancel your account online with two clicks. No
                cancellation fees – start or stop your account anytime.
              </h2>
            </div>
          </div>
          <div className="card-wrap">
            <div className="sub-card" onClick={dropDown5}>
              <h2>What can be watched in MyMovie?</h2>
              <FiPlus className={iconAnimated5 ? "icon active" : "icon"} />
            </div>
            <div
              className={
                dropdownDisplay5 ? "sub-dropdown active" : "sub-dropdown"
              }
            >
              <h2>
                MyMovie has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals
                and more. Watch to your heart's content, whenever you want.
              </h2>
            </div>
          </div>
          <div className="card-wrap">
            <div className="sub-card" onClick={dropDown6}>
              <h2>Is MyMovie suitable for children?</h2>
              <FiPlus className={iconAnimated6 ? "icon active" : "icon"} />
            </div>
            <div
              className={
                dropdownDisplay6 ? "sub-dropdown active" : "sub-dropdown"
              }
            >
              <h2>
                The MyMovie Kids experience is included with your membership so
                you have parental control while your kids enjoy TV shows and
                movies for the family at home. A child's profile includes
                PIN-protected parental controls so you can limit the age rating
                of the content that children can watch and block certain titles
                that children should not watch.
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ques;
