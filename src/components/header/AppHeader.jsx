import "./header.css";
import "../../../src/App.css";
import loupe from "./Images/loupe1.png";
import menu from "./Images/menu1.png";
import { useState } from "react";

const AppHeader = () => {
  const [butrClos, setButrClos] = useState(false);
  return (
    <>
      <div className="all_width">
        <div className="mainHeader ">
          <p>DudeShape</p>
          <ul className="headerLink_ul">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          <div className="rightNaviBtn">
            <button>
              <img src={loupe} alt="#" />
            </button>
            <button onClick={() => setButrClos(true)}>
              <img src={menu} alt="#" />
            </button>
          </div>

          <div className={butrClos ? "headBurger" : "headBurgerClosest"}>
            <ul>
              <li>
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
            </ul>
            <button onClick={() => setButrClos(false)}>X</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppHeader;
