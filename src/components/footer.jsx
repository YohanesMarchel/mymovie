import React, { useEffect } from "react";
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import "./../css/footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-top"></div>
        <div className="footer-wrap">
          <div className="row first">
            <div className="alamat">
              <span><FiMail/>aclprcjt@gmail.com</span>
              <br />
              {/* <br /> */}
              <span><FiPhone/>+628 9335 6571</span>
              <br />
              {/* <br /> */}
              <span><FiMapPin/>Desa Matako,Jln Trans Sulawesi,Sulteng,Indonesia</span>
              <br />
              {/* <br /> */}
            </div>
            <div className="contact">
              <form action="">
                <div class="input-group">
                  <i data-feather="user" class="icon"></i>
                  <input type="text" placeholder="Nama" />
                </div>
                <div class="input-group">
                  <i data-feather="mail" class="icon"></i>
                  <input type="text" placeholder="Email" />
                </div>
                <div class="input-group">
                  <i data-feather="coment" class="icon"></i>
                  <textarea type="text" placeholder="Your Suggest" />
                </div>

                <button class="btn">SEND</button>
              </form>
            </div>
          </div>
          <div className= "row last">
            <div className="social">
              <span><a href=""><FiInstagram/></a></span>
              <span><a href=""><FiFacebook/></a></span>
              <span><a href=""><FiLinkedin/></a></span>
            </div>
            <div className="copyright">copyright © 2023 acelproject.</div>
          </div>
        </div>
        <div className="footer-bot"></div>
      </footer>
    </>
  );
};

export default Footer;
