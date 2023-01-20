import React, { useState, useEffect } from 'react'
import useStyles from './styles.jsx'
import { AppBar, Typography, Toolbar, Button, Avatar } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';



const Navbar = () => {

  const history=useHistory();
  const dispatch=useDispatch();
  const classes = useStyles();
  
  const [user, setUser] = useState(null);
  /* if(localStorage.getItem('profile')){
    setUser(JSON.parse(localStorage.getItem('profile')))
  } */
  /*  console.log(user); */

  const logout=()=>{
      dispatch({type:"LOGOUT"});
      history.push('/');
      setUser(null);
  }

 /*  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem('profile')));


  },[]);
 */

  return (
    <>
      <AppBar className={classes.appBar} position='static' color='inherit' >
        <div className={classes.brandContainer} >
          <Typography component={Link} to="/" className={classes.heading} variant='h2' >Cloud Services</Typography>
          

          
            {
              user ? (
                <div className={classes.profile} >
                  <Avatar className={classes.purple} alt={user.result.name} src={user.result.picture} >{user.result.name}</Avatar>
                  <Typography variant='h6' className={classes.userName} >{user.result.name}</Typography>
                  <Button variant='contained' className={classes.logout} color="secondary" onClick={logout} >Logout</Button>
                </div>
              ) : (
                <div className={classes.pro}>
                  <Button component={Link} to="/authUser" class="button-30" role="button">Primary Broker</Button>
                  <Button component={Link} to="/authProvider" class="button-30" role="button" >Secondary Broker </Button>
                </div>
              )
            }
           
          
          </div>
      </AppBar>
    </>
  )
}

export default Navbar