import React,{useState, useEffect} from 'react'
import { Container, Avatar, Typography, Paper, Button, Grid } from '@material-ui/core'
/* import { GoogleLogin} from 'react-google-login'; */
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import jwtDecode from 'jwt-decode';
import useStyles from './styles'
import Input from './Input';
import Navbar from '../Navbar/Navbar';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signinuser, signupuser } from '../../actions/userActions';
/* import Icon from './Icon'; */

const Auth = () => {
  const init={
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
  }
  const classes = useStyles();
  
  const dispatch= useDispatch();
  const history=useHistory();
  
  const [showPass, setshowPass] = useState(false)
  const [isSignup, setisSignup] = useState(false)
  const [formData, setFormData] = useState(init)


  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData);
    
    if(isSignup){
      if(formData.password!==formData.confirmPassword){
        setFormData(init);
        alert("Password and confirm password field should be matching");
        
      }
      else{
        dispatch(signupuser(formData,history))}
    }
    else{
      dispatch(signinuser(formData,history))
    }

  }
  const handleChange=(e)=>{
      setFormData({...formData, [e.target.name]:e.target.value})
  }

  const handleShowPass=()=>{setshowPass((prev)=>!prev)}
  const switchMode=()=>{
    setisSignup((prev)=>!prev);
    setshowPass(false);
  }
  
  
  const googleSuccess= async (res)=>{
    /* console.log(res); */
    console.log(jwtDecode(res.credential));
    
    var result=jwtDecode(res?.credential);
    var token=res;

    try {
      dispatch({type:'AUTH',data:{result,token}});
      history.push('/userHome')
    } catch (error) {
      console.log(error);
      
      
    }
  }

 /*  const googleFailure=(error)=>{
     console.log(error);
     
      console.log('Goolge sign in was unsuccessfull. Please try again later.');
      
  } */

  useEffect(() => {
    
     /* global google */
    google.accounts.id.initialize({
      client_id:"979501484813-ohkedireefp4gbt35s176lduf5gsc8do.apps.googleusercontent.com",
      callback: googleSuccess,
      
    })

    google.accounts.id.renderButton( document.getElementById('signInDiv') ,{
       size: "large",shape: "square",theme: "filled_blue", width: "360"	
    })
  }, [])
  

  return (
    <>
    <Navbar/>
      <Container component="main" maxWidth="xs"  >
        <Paper className={classes.paper} elevation={3} >
          <Avatar className={classes.avatar} >
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant='h5'> {isSignup ? 'Sign Up' : 'Sign In'} </Typography>

          <form className={classes.form} onSubmit={handleSubmit} >
              <Grid container spacing={2} >
                 { isSignup && (
                    <>
                      <Input name="firstName" label='First Name' handleChange={handleChange} autofocus half  />
                      <Input name="lastName" label='Last Name' handleChange={handleChange} half  />
                    </>
                  )}
                  <Input name="email" label='Email' handleChange={handleChange} type="email"  />
                  <Input value={formData.password} name="password" label='Password' handleChange={handleChange} type={showPass ? 'text' : 'password' } handleShowPassword={handleShowPass}  />
                  
                  {
                    isSignup && (
                      <>
                      <Input value={formData.confirmPassword} name="confirmPassword" label='Confirm Password' handleChange={handleChange} type="password"  />
                      </>
                    )
                  }
              </Grid>
              <Button color='primary' onClick={handleSubmit}  variant='contained' className={classes.submit} type='submit' fullWidth  >{ isSignup ? 'Sign Up' : 'Sign In'}</Button>
              
              <Button id='signInDiv' type='submit' onClick={handleSubmit} className={classes.googleButton} color='primary' fullWidth  ></Button>  
              
              {/* <GoogleLogin
                clientId='757937043836-8af40i60455nuf5co198r36ciskogkv8.apps.googleusercontent.com'
                buttonText="SignIn"
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy={'single_host_origin'}
              
              />     */}
              <Grid container justify='flex-end' >
                    <Grid item >
                       <Button onClick={switchMode} style={{fontFamily:'fantasy'}} >
                          {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up "}
                       </Button>
                    </Grid>
              </Grid>
          </form>
        </Paper>

      </Container>

    </>
  )
}

export default Auth