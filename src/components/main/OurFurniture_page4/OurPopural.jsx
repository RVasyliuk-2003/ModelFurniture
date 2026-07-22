import "./ourPopular.css";
import "../../../App.css";
import one from "./Images/Rectangle34.png";
import two from "./Images/Rectangle38.png";
import three from "./Images/Rectangle36.png";

import heart from "./Images/Frame87.png";
import contact from "./Images/Frame42.png";

const ourPopular = () => {
  return (
    <>
      <section>
        <div className="mainOurPopularBox all_width">
          <div className="textBox">
            <h5>Our Popular Furniture</h5>
            <p>
              All of our furniture uses the best materials and choices for our{" "}
              <br />
              customers. All of our furniture uses the best materials and
              choices for our customers.
            </p>
          </div>

          <div className="furnitureBox">
            <div className="renderCard">
              <img src={one} alt="#" />

              <div className="rerdCompo">
                <div className="rerdCompo1">
                  <p>White Swan Chair </p>

                  <div className="maniBoxImg">
                    <img src={heart} alt="#" />
                    <img src={contact} alt="#" />
                  </div>
                </div>

                <div className="rerdCompo2">
                  <p>40$</p>
                  <button>Buy Now</button>
                </div>
              </div>
            </div>

            <div className="renderCard">
              <img src={two} alt="#" />

              <div className="rerdCompo">
                <div className="rerdCompo1">
                  <p>White Swan Chair </p>

                  <div className="maniBoxImg">
                    <img src={heart} alt="#" />
                    <img src={contact} alt="#" />
                  </div>
                </div>

                <div className="rerdCompo2">
                  <p>40$</p>
                  <button>Buy Now</button>
                </div>
              </div>
            </div>

            <div className="renderCard">
              <img src={three} alt="#" />

              <div className="rerdCompo">
                <div className="rerdCompo1">
                  <p>White Swan Chair </p>

                  <div className="maniBoxImg">
                    <img src={heart} alt="#" />
                    <img src={contact} alt="#" />
                  </div>
                </div>

                <div className="rerdCompo2">
                  <p>40$</p>
                  <button>Buy Now</button>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="furnitureBox">
            {arr.map((ell, id) => (
              <div className="renderCard" key={id}>
               <img src={three} alt="#" />

              <div className="rerdCompo">
                <div className="rerdCompo1">
                  <p>White Swan Chair </p>

                  <div className="maniBoxImg">
                    <button>
                      <img src={heart} alt="#" />
                    </button>
                    <button>
                      <img src={contact} alt="#" />
                    </button>
                  </div>
                </div>

                <div className="rerdCompo2">
                  <p>{ell.price}$</p>
                  <button>Buy Now</button>
                </div>
              </div>
                
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
};

export default ourPopular;
