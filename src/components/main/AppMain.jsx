import WeHelp1 from "./WeHelp_store1/WeHelp";
import PaymentPage from "./Payment_page2/PaymentPage";
import AboutUs from "./AboutUs_page3/AboutUs";
import OurPopular from "./OurFurniture_page4/OurPopural";
import AllFurniture from "./AllFurniture_page5/AllFurniture";
import OurCustomers from "./Ourcustomers_page6/OurCustomers";
import GmailBox from "./GmailBox_page7/GmailBox";

import ModlWindow from "./WeHelp_store1/ModlWindow";

const AppMain = () => {
  return (
    <>
      <WeHelp1></WeHelp1>
      <ModlWindow />
      <PaymentPage />
      <AboutUs />
      <OurPopular />
      <AllFurniture />
      <OurCustomers />
      <GmailBox />
    </>
  );
};

export default AppMain;
