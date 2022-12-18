import React,{ useEffect, useState } from 'react'
import {Grow} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import MainSlider from '../MainSlider/MainSlider';
import SLAuserEnd from '../SLA section/SLAuserEnd';

const Home = () => {
   // const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);
  
    useEffect(() => {
    }, [currentId, dispatch]);
  return (
    <>
    <Navbar/>
    <Grow in >
    <MainSlider/>
    </Grow>
  </>
  )
}

export default Home