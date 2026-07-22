import "../../App.css";
import "./footer.css";

import facebookPng from "./images/facebook.png";
import twitterPng from "./images/twitter.png";
import instagramPng from "./images/instagram.png";
import youTubePng from "./images/youTube.png";

import frame from "./images/Frame.png";
import { useState } from "react";

const AppFooter = () => {
  const [inpt, setInpt] = useState("");
  const [error, setError] = useState("");

  const [colorErr, setColorErr] = useState(true);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const emailPr = () => {
    if (emailRegex.test(inpt)) {
      setError("Gmail відправлено");
      setInpt("");
    } else {
      setError("Gmail некоректний");
      setColorErr(false);
    }
  };

  return (
    <>
      <footer>
        <div className="greenBox">
          <div className="mainBoxFtr all_width">
            <div className="dudeShapeBox">
              <h6>DudeShape</h6>
              <p>
                Lorem ipsum dolor sit amet, conse <br /> ctetur adipiscing elit,
                sed eiusmod <br /> tempor incididunt ut labore.
              </p>
              <div className="dudeShapeBoxChildren">
                <p>Follow Us :</p>
                <div className="FollowUsImgBox :">
                  <img src={facebookPng} alt="#" />
                  <img src={twitterPng} alt="#" />
                  <img src={instagramPng} alt="#" />
                  <img src={youTubePng} alt="#" />
                </div>
              </div>
            </div>

            <nav className="footerBox">
              <div className="navFtrChild">
                <h4>Take a tour</h4>
                <ul>
                  <li>
                    <a href="#">Features</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Product</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                </ul>
              </div>

              <div className="navFtrChild">
                <h4>Our company</h4>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Media</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </nav>

            {/* Спочатку спробував робити це з Таблицею
             і структурувати з допомогою flex, але потім дізнався що Таблиця втрачає сенс
             і просто перетворюється на flex елементи  */}

            {/* <table className="tableFtr">
              <tr>
                <th>Take a tour</th>
                <td>
                  <a href="#">Features</a>
                </td>
                <td>
                  <a href="#">Pricing</a>
                </td>
                <td>
                  <a href="#">Product</a>
                </td>
                <td>
                  <a href="#">Support</a>
                </td>
              </tr>
              <tr>
                <th>Our company</th>
                <td>
                  <a href="#">About Us</a>
                </td>
                <td>
                  <a href="#">Blog</a>
                </td>
                <td>
                  <a href="#">Media</a>
                </td>
                <td>
                  <a href="#">Contact Us</a>
                </td>
              </tr>
            </table> */}

            <div className="subscribeFtrBox">
              <h6>Subscribe</h6>
              <p>
                Subscribe to get the latest <br /> news from us
              </p>

              <div className="gmailFormSubscribe">
                <input
                  value={inpt}
                  onChange={(e) => setInpt(e.target.value)}
                  type="email"
                  placeholder="Email Address"
                />
                <button onClick={() => emailPr()}>
                  <img src={frame} alt="#" />
                </button>
              </div>
              <p style={{ color: colorErr ? "grey" : "red" }}>{error}</p>
            </div>
          </div>
        </div>

        <div className="greenBox2">
          <a href="#">Copyright @ 2021. Crafted with love.</a>
        </div>
      </footer>
    </>
  );
};

export default AppFooter;
