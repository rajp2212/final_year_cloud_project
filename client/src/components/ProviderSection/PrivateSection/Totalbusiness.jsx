import React,{useEffect, useState} from "react";
import "./CSS/TotalBusiness.css";
import { BsCurrencyDollar, BsPeople } from "react-icons/bs";
import { AiOutlineShoppingCart,AiOutlineLock,AiOutlineThunderbolt,AiFillClockCircle,AiOutlineApartment } from "react-icons/ai";
import { RiRadioButtonLine } from "react-icons/ri";
/* import { getInfo } from "../../../actions/userActions"; */
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../api";
import {CircularProgress } from '@material-ui/core';

const Totalbusiness = ({proId}) => {
  const dispatch=useDispatch();
  const [data, setdata] = useState([]);
  
  
const getData=async()=>{
  try {
    let val  = await fetchData();
   /*  console.log(val.data); */
    
    setdata(val.data);
    
    
  } catch (error) {
      console.log(error);
  }
}
  


  

  /* const [user, setUser] = useState(instance); */
  
  console.log(data);
  let userData=data.find(element => element._id==proId);
    
  /* if(data.length){
    setUser(data)
  } */
  console.log(userData);
  useEffect(() => {
    getData();
  }, []);
  
  
  return (
    !data.length ? <CircularProgress /> : (
      <>
      <div className="row_boxes">
      
            <div className="row_boxes_inner" >
              <div className="first">
                <p className="number">{userData.sales}</p>
                <p className="title">Total Sales</p>
              </div>
              <div className="second">
                <BsCurrencyDollar />
              </div>
            </div>
            <div className="row_boxes_inner" >
              <div className="first">
                <p className="number">{userData.network_bandwidth} Mbps</p>
                <p className="title">Bandwidth</p>
              </div>
              <div className="second">
                <AiOutlineThunderbolt />
              </div>
            </div>
            <div className="row_boxes_inner" >
              <div className="first">
                <p className="number">{userData.response_time} ms</p>
                <p className="title">Average Response Time</p>
              </div>
              <div className="second">
                <AiFillClockCircle />
              </div>
            </div>
            <div className="row_boxes_inner" >
              <div className="first">
                <p className="number">{userData.security_management}</p>
                <p className="title">Security Management</p>
              </div>
              <div className="second">
                <AiOutlineLock />
              </div>
            </div>
            
      </div>
      <div className="row_boxes">
        
            <div className="row_boxes_inner" >
              <div className="first">
                <p className="number">{userData.total_VM - userData.available_VM}</p>
                <p className="title">Active Users</p>
              </div>
              <div className="second">
                <BsPeople />
              </div>
            </div>
            <div className="row_boxes_inner" >
              <div className="first">
                <p className="number">₹{userData.cost} /month</p>
                <p className="title">Monthly Cost</p>
              </div>
              <div className="second">
                <AiOutlineShoppingCart />
              </div>
            </div>
            <div className="row_boxes_inner" >
              <div className="first">
                <p className="number">{userData.available_VM}</p>
                <p className="title">Available virtual machines</p>
              </div>
              <div className="second">
                <AiOutlineApartment />
              </div>
            </div>
            <div className="row_boxes_inner" >
              <div className="first">
                <p className="number">{userData.flexibility}</p>
                <p className="title">Flexibility</p>
              </div>
              <div className="second">
                <RiRadioButtonLine />
              </div>
            </div>
         
      </div>
    </>
    
      )
         
  );
};
export default Totalbusiness;
