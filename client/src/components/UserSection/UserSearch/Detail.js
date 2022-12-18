import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./search.css";
import data from '../ProviderData'
import UserNav from "../UserNav/UserNav";
import { fetchData } from "../../../api";
import {CircularProgress } from '@material-ui/core';
import Totalbusiness from "../../ProviderSection/PrivateSection/Totalbusiness";
import ResourcePage from "./ResourcePage";
// Placeholder for detail data
function Detail({
  match: {
    params:{ id }
  }
}) {
  const [newData, setnewData] = useState([])
  const getData=async()=>{
    try {
      let val  = await fetchData();
     /*  console.log(val.data); */
      
      setnewData(val.data);
      
      
    } catch (error) {
        console.log(error);
    }
  }

  let result=newData.find(element => element._id===id);

  useEffect(() => {
    getData();
  }, [])
  
  return (
    <>
    <UserNav/>
    
    <div className="container">
      <div className="card">
        <h1>{data.name}</h1>
        <h3>ID: {id}</h3>
        {
        !newData.length ? <CircularProgress /> : (
        <>
        <ResourcePage data={result} proId={id} />
        </>
        )}
        <Link to="/userHome/filter">Return to List View</Link>
      </div>
    </div>
    </>
  );
}

export default Detail;