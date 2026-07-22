import "../../../App.css";
import "./allFurniture.css";
import roomPng from "./images/Group8917.png";
import kitchenPng from "./images/kitchen1.png";
import diningRoomPng from "./images/Group8925.png";
import officePng from "./images/Group8926.png";
import bedRoomPng from "./images/Group8927.png";
import hallwayPng from "./images/Group8928.png";

import Hallway from "./images/images2.jfif";
import Kitchen from "./images/images3.jfif";
import Office from "./images/images4.jfif";
import DiningRoom from "./images/images5.jfif";
import BedRoom from "./images/images1.jfif";
import LivingRoom from "./images/skfks.jpg";

import { useState } from "react";

const AllFurniture = () => {
  const [imgWind, setImgWind] = useState("Office");

  const categories = [
    { name: "LivingRoom", img: roomPng, mainImg: LivingRoom },
    { name: "Kitchen", img: kitchenPng, mainImg: Kitchen },
    { name: "DiningRoom", img: diningRoomPng, mainImg: DiningRoom },
    { name: "Office", img: officePng, mainImg: Office },
    { name: "BedRoom", img: bedRoomPng, mainImg: BedRoom },
    { name: "Hallway", img: hallwayPng, mainImg: Hallway },
  ];
  return (
    <>
      <section>
        <div className="all_width">
          <h5 className="allFurniture_h5">All Furniture</h5>

          <ul className="AllFurniture_ul">
            <li>
              <a href="#">Shop By Room</a>
            </li>
            <li>
              <a href="#">Shop By Category</a>
            </li>
            <li>
              <a href="#">Shop By Style</a>
            </li>
          </ul>

          <div className="AllFurnitureMainBox">
            <img
              className="imgWind"
              src={categories.find((ell) => ell.name === imgWind)?.mainImg}
              alt="#"
            />

            <div className="FurnitureCategory">
              {categories.map((ell, id) => (
                <div
                  onClick={() => setImgWind(ell.name)}
                  style={{
                    color: imgWind === ell.name ? "#ffff" : "",
                    backgroundColor: imgWind === ell.name ? "#154444" : "",
                  }}
                  key={id}
                  className="FurnitureCategoryBlock"
                >
                  <div className="BlockChildrenCate">
                    <img src={ell.img} alt={ell.name} />
                    <p
                      style={{
                        color: imgWind === ell.name ? "#ffff" : "",
                      }}
                    >
                      {ell.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllFurniture;
