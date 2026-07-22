// import "../../../App.css";
import "./ourCustomers.css";
import mainImg from "./images/Rectangle86.png";
import userPng from "./images/Ellipse28.png";
import star from "./images/star2.png";

const OurCustomers = () => {
  return (
    <>
      <section>
        <div className="all_width">

          <div className="mainBoxCustomers ">
            <div className="img-layer">
              <div className="bg-circle"></div>
              <div className="img-wrap">
                <img src={mainImg} />
              </div>{" "}
            </div>

            <div className="BoxCustomersInfo">
              <h5>
                Our customers are verry <br /> importan to us
              </h5>
              <p>
                All of our furniture uses the best materials and choices for our
                customers. All of our furniture uses the best materials and
                choices for our customers.
              </p>
              <div className="userBox">
                <img src={userPng} alt="#" />

                <div className="childrenUserBox">
                  <p>Mh Jibon</p>
                  <div>
                    <img src={star} alt="#" />
                    <p>4.8</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurCustomers;
