import React from 'react'
import HomeSlider from './Slider/HomeSlider'
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserNav from './UserNav/UserNav'
import UserSearch from './UserSearch/UserSearch';

function UserHome() {
  return (
    <>
      <UserNav />
       <HomeSlider />
    </>
  )
}

export default UserHome