import { useState } from "react";
import "../../../App.css";
import "./gmailBox.css";
import gmail1 from "./images/gmail1.png";

const GmailBox = () => {
  const [inpt, setInpt] = useState("");
  const [error, setError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const gmailIn = () => {
    
    if (emailRegex.test(inpt)) {
      setError("Email відправленно");
      setInpt("");
    } else {
      setError("Email некоректний");
    }
  };

  return (
    <>
      <section>
        <div className="all_width">
          <div className="mainBoxGmail">
            <h5>
              Subscribe to get the latest news <br /> about us
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{" "}
              <br /> eiusmod tempor incididunt ut labore at dolore.
            </p>
            <div className="inputWrapper">
              <img src={gmail1} alt="#" />
              <input
                onChange={(e) => setInpt(e.target.value)}
                type="text"
                placeholder="Enter your email"
                value={inpt}
              />
              <button onClick={() => gmailIn()} type="submit">
                Register
              </button>
            </div>
            <p>{error}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default GmailBox;
