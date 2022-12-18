import React from "react";
import "./CSS/Dashboard.css";
import Analytics from "./Analytics";
import TotalBusiness from "./Totalbusiness";
const PrivateSection = () => {
  var instance=JSON.parse(localStorage.getItem('profile'));
  var idx=instance.result._id;
  return (
    <>
      <div className="dashboard">
        <h1>Dashboard</h1>
        <div className="grid">
          <div className="one">
            <TotalBusiness proId={idx} />
          </div>
          <div className="two">
            <Analytics />
          </div>
        </div>
      </div>
    </>
  );
};
export default PrivateSection;
