import "./aboutUs.css";
import "../../../App.css";
import aboutUsImg from "./Images/Rectangle.png";
import one from "./Images/shield3.png";
import two from "./Images/guarantee1.png";
import thry from "./Images/freeDelivery.png";

const AboutUs = () => {
  return (
    <>
      <section>
        <div className="mainBoxAboutUs all_width">
          <div className="relativeDiv">
            
            {/* Зробив замість Діва relativeDiv::before в css */}
            {/* <div className="grayContainer"></div> */}
            <img src={aboutUsImg} alt="#" />
          </div>

          <div className="contentBoxAboutUs">
            <div className="aboutBoxChild1">
              <h5>About Us</h5>

              <p>
                All of our furniture uses the best materials and <br /> choices
                for our customers. All of our furniture <br /> uses the best
                materials{" "}
              </p>
            </div>

            <div className="textProcesBox">
              <div className="textProcesBox_Children1">
                <img src={one} alt="#" />
                <div className="textProcesBox_Children2">
                  <h6>Best Quality</h6>
                  <p>
                    All of our furniture uses the best <br />
                    materials and choices
                  </p>
                </div>
              </div>
              <div className="textProcesBox_Children1">
                <img src={two} alt="#" />
                <div className="textProcesBox_Children2">
                  <h6>100% Secure</h6>
                  <p>
                    All of our furniture uses the best <br />
                    materials and choices
                  </p>
                </div>
              </div>
              <div className="textProcesBox_Children1">
                <img src={thry} alt="#" />
                <div className="textProcesBox_Children2">
                  {" "}
                  <h6>Free Shpping</h6>
                  <p>
                    All of our furniture uses the best <br />
                    materials and choices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
