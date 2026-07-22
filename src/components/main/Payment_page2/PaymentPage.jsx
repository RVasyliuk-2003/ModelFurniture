// import "./Images";
import "./payment.css";
import "../../../App.css";

import masterCard from "./Images/Frame65.png";
import airBnb from "./Images/Frame64.png";
import uber from "./Images/Frame13.png";
import payPal from "./Images/Frame14.png";
import visa from "./Images/Group8907.png";
import stripe from "./Images/Frame63.png";

const PaymentPage = () => {
  return (
    <>
      <div className="paymentBox all_width">
        <h6>Trusted by 20,000+ companies</h6>

        <div className="paymentImg">
          <img src={masterCard} alt="#" />
          <img src={airBnb} alt="#" />
          <img src={uber} alt="#" />
          <img src={payPal} alt="#" />
          <img src={visa} alt="#" />
          <img src={stripe} alt="#" />
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
