import React from "react";
import "../styles/Eight.css";
import esewa from "../images/esewa.png";
import imepay from "../images/imepay.png";
import khalti from "../images/khalti.png";
import NMB from "../images/NMB.png";
import visa from "../images/visa.png";
const Eight = () => {
  return (
    <>
      <div className="nine py-5 mt-5">
        <div className="container">
          <p className="text-center">Our Associated Partners</p>
          <div className="row">
            <div className="payment">
              <img src={esewa} alt="esewa" />
              <img src={imepay} alt="imepay" className="imepay" />
              <img src={khalti} alt="khalti" className="khalti" />
              <img src={NMB} alt="NMB" className="NMB" />
              <img src={visa} alt="Visa" className="visa" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eight;
