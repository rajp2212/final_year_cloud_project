import React, { useState, useEffect } from 'react'
import { MenuItem, Select, Container, Avatar, Typography, Paper, Button, Grid, InputLabel } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from '../ProviderAuth/styles'
import Input from '../../Auth/Input';
import Navbar from '../ProviderNav/ProviderNav';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signinprovider, signupprovider, updateInfo } from '../../../actions/userActions';
/* import Icon from './Icon'; */

const UpdateProInfo = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
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

    const [formData, setFormData] = useState(user.result)

    /* const handleSubmit = (e) => { } */
     const handleSubmit=(e)=>{
       e.preventDefault();
       /* console.log(formData); */
      
         dispatch(updateInfo(user.result._id,formData,history))
        
   
     }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        /* console.log(formData); */
        
        
    }
   
           
    return (
        <>
            <Navbar />
            <Container component="main"  style={{position:"relative",left:"22%"}} >
                <Paper className={classes.paper} elevation={3} >
                    <Avatar className={classes.avatar} >
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant='h5'> Update QoS details here </Typography>

                    <form className={classes.form} onSubmit={handleSubmit} >
                        <Grid container spacing={2} >
                            
                                    <Input value={formData.name} name="brandName" label='Brand Name' handleChange={handleChange} autofocus />
                                    <Input value={formData.cost} name="cost" label='Cost (in Rupees ₹)' handleChange={handleChange} type="number" />
                                    <Input value={formData.response_time} name="response_time" label='Response Time(in ms)' handleChange={handleChange} type="number" half />
                                    <Input value={formData.network_bandwidth} name="network_bandwidth" label='Bandwidth(in Mbps)' handleChange={handleChange} type="number" half />
                                    <Input value={formData.available_VM} name="available_VM" label='Available Virtual Machines' handleChange={handleChange} type="number" />
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
                                        <MenuItem value={"Medium"}>Medium</MenuItem>
                                        <MenuItem value={"Low"}>Low</MenuItem>
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
                                        <MenuItem value="Medium">Medium</MenuItem>
                                        <MenuItem value="Low">Low</MenuItem>
                                    </Select>
                              
                            
                        </Grid>
                        <Button color='primary' onClick={handleSubmit} variant='contained' className={classes.submit} type='submit' fullWidth  >Update Now</Button>

                    </form>
                </Paper>

            </Container>

        </>
    )
}

export default UpdateProInfo