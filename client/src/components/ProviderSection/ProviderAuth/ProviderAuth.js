import React, { useState, useEffect } from 'react'
import { MenuItem, Select, Container, Avatar, Typography, Paper, Button, Grid, InputLabel } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles'
import Input from '../../Auth/Input';
import Navbar from '../../Navbar/Navbar';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signinprovider, signupprovider } from '../../../actions/userActions';
/* import Icon from './Icon'; */

const ProviderAuth = () => {
    const init = {
        brandName: "",
        cost: 0,
        available_VM: 0,
        network_bandwidth: 0,
        security_management: "None",
        flexibility: "None",
        response_time: 0,

    }
    const classes = useStyles();

    const dispatch = useDispatch();
    const history = useHistory();

    const [showPass, setshowPass] = useState(false)
    const [isSignup, setisSignup] = useState(false)
    const [formData, setFormData] = useState(init)

    /* const handleSubmit = (e) => { } */
     const handleSubmit=(e)=>{
       e.preventDefault();
       /* console.log(formData); */
       
       if(isSignup){
         if(formData.password!==formData.confirmPassword){
           setFormData(init);
           alert("Password and confirm password field should be matching");
           
         }
         else{
           dispatch(signupprovider(formData,history))}
       }
       else{
         dispatch(signinprovider(formData,history))
       }
   
     }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        /* console.log(formData); */
        
        
    }

    const handleShowPass = () => { setshowPass((prev) => !prev) }
    const switchMode = () => {
        setisSignup((prev) => !prev);
        setshowPass(false);
    }

    const Placeholder = ({ children }) => {
      
        return <div className={classes.placeholder}>{children}</div>;
      };




    return (
        <>
            <Navbar />
            <Container component="main"  style={{position:"relative",left:"22%"}} >
                <Paper className={classes.paper} elevation={3} >
                    <Avatar className={classes.avatar} >
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant='h5'> {isSignup ? 'Sign Up with QoS Details' : 'Sign In'} </Typography>

                    <form className={classes.form} onSubmit={handleSubmit} >
                        <Grid container spacing={2} >
                            {isSignup && (
                                <>
                                    <Input name="brandName" label='Brand Name' handleChange={handleChange} autofocus />
                                    <Input name="cost" label='Cost (in Rupees ₹)' handleChange={handleChange} type="number" />
                                    <Input name="response_time" label='Response Time(in ms)' handleChange={handleChange} type="number" half />
                                    <Input name="network_bandwidth" label='Bandwidth(in Mbps)' handleChange={handleChange} type="number" half />
                                    <Input name="available_VM" label='Available Virtual Machines' handleChange={handleChange} type="number" />
                                    <InputLabel style={{margin:"17px"}} >Security Management *</InputLabel>
                                    <Select
                                        placeholder='Security'
                                        style={{ width: "290px", padding: "0.12rem", marginLeft: "60px",marginBottom:"10px"  }}
                                        value={formData.security_management}
                                        label={"Security Management"}
                                        onChange={handleChange}
                                        name="security_management"
                                        variant='outlined'
                                        
                                        
                                    >
                                         <MenuItem value={"None"}>None</MenuItem>
                                        <MenuItem value={"High"}>High</MenuItem>
                                        <MenuItem value={"Low"}>Medium</MenuItem>
                                        <MenuItem value={"Medium"}>Low</MenuItem>
                                    </Select>
                                    <InputLabel  style={{margin:"17px"}}  >Flexibility *</InputLabel>
                                    <Select
                                        style={{ width: "290px", padding: "0.12rem", marginLeft: "60px" }}
                                        value={formData.flexibility}
                                        label="Flexibility"
                                        onChange={handleChange}
                                        name="flexibility"
                                        variant='outlined'
                                        
                                    >
                                         <MenuItem value="None">None</MenuItem>
                                        <MenuItem value="High">High</MenuItem>
                                        <MenuItem value="Low">Medium</MenuItem>
                                        <MenuItem value="Medium">Low</MenuItem>
                                    </Select>
                                </>
                            )}
                            <Input name="email" label='Email' handleChange={handleChange} type="email" />
                            <Input value={formData.password} name="password" label='Password' handleChange={handleChange} type={showPass ? 'text' : 'password'} handleShowPassword={handleShowPass} />

                            {
                                isSignup && (
                                    <>
                                        <Input value={formData.confirmPassword} name="confirmPassword" label='Confirm Password' handleChange={handleChange} type="password" />
                                    </>
                                )
                            }
                        </Grid>
                        <Button color='primary' onClick={handleSubmit} variant='contained' className={classes.submit} type='submit' fullWidth  >{isSignup ? 'Sign Up' : 'Sign In'}</Button>

                        <Grid container justify='flex-end' >
                            <Grid item >
                                <Button onClick={switchMode} style={{ fontFamily: 'fantasy' }} >
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

export default ProviderAuth