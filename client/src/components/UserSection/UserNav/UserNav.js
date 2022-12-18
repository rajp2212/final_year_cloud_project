import React, { useState, useEffect } from 'react'
import useStyles from './styles.jsx'
import { AppBar, Typography, Toolbar, Button, Avatar } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';



const UserNav = () => {

  const history=useHistory();
  const dispatch=useDispatch();
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  /*  console.log(user); */

  const logout=()=>{
      dispatch({type:"LOGOUT"});
      history.push('/');
      setUser(null);
  }

  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem('profile')));


  },[]);


  return (
    <>
      <AppBar className={classes.appBar} position='static' color='inherit' >
        <div className={classes.brandContainer} >
          <Typography component={Link} to="/" className={classes.heading} variant='h4' >User Section</Typography>
          
          </div>

          <div className={classes.brandContainer} >
          <Button component={Link} to="/userHome" className="button-30" variant='outlined' >User Home</Button>
          <Button component={Link} to="/userHome/myresources" className="button-30" variant='outlined' >My Resources</Button>
          <Button component={Link} to="/userHome/filter" className="button-30" variant='outlined' >Service Filtering</Button>
          </div>
          <Toolbar className={classes.toolbar} >
          
                <div className={classes.profile} >
                  <Avatar className={classes.purple} alt={user.result.name} src={user.result.picture} >{user.result.userName}</Avatar>
                  <Typography variant='h6' className={classes.userName} >{user.result.name}</Typography>
                  <Button variant='contained' className={classes.logout} color="secondary" onClick={logout} >Logout</Button>
                </div>
              
            
          </Toolbar>
        
      </AppBar>
    </>
  )
}

export default UserNav