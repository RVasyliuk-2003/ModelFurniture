import { useState } from "react";
import "./weHelp.css";
import "../../../App.css";
import img1 from "./Images/Rectangle.png";
import ModlWindow from "./ModlWindow";

const WeHelp1 = () => {
  const [modlForm, setModlForm] = useState(false);

  return (
    <>
      <section>
        <div className="mainBox all_width">
          <img src={img1} alt="#" />

          <div className="rigthInfoBox">
            <div className="rigthInfoBox_children">
              <h1>We Help You Make Modern Furniture</h1>
              <p>
                All of our furniture uses the best materials and <br />
                choices for our customers. All of our furniture uses <br /> the
                best materials{" "}
              </p>

              <button
                className="all_btn_for_hower"
                onClick={() => setModlForm(true)}
              >
                {" "}
                Explore More
              </button>
            </div>
          </div>
        </div>

        <ModlWindow modlForm={modlForm} setModlForm={setModlForm} />
      </section>
    </>
  );
};

export default WeHelp1;
