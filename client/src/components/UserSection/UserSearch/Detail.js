import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./search.css";
import data from '../ProviderData'
// Placeholder for detail data
function Detail({
  match: {
    params:{ id }
  }
}) {
  
  return (
    <div className="container">
      <div className="card">
        <h1>{data.name}</h1>
        <h3>ID: {id}</h3>
        <Link to="/userHome/search">Return to List View</Link>
      </div>
    </div>
  );
}

export default Detail;