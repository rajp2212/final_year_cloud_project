import React, { useState, useEffect } from 'react'
import { MenuItem, Select,Box, Container, Avatar, Typography, Paper, Button, Grid, InputLabel } from '@material-ui/core'
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
        cpu_capacity: "None",
        memory_size: "None",
        boot_time: "None",
        scale_up: "None",
        scale_down: "None",
        scale_up_time: "None",
        scale_down_time: "None",
        max_vm_configure: "None",
        auto_scaling: "None",
        storage: "None",

    }
    const classes = useStyles();

    const dispatch = useDispatch();
    const history = useHistory();

    const [showPass, setshowPass] = useState(false)
    const [isSignup, setisSignup] = useState(false)
    const [formData, setFormData] = useState(init)

    /* const handleSubmit = (e) => { } */
    const handleSubmit = (e) => {
        e.preventDefault();
        /* console.log(formData); */

        if (isSignup) {
            if (formData.password !== formData.confirmPassword) {
                setFormData(init);
                alert("Password and confirm password field should be matching");

            }
            else {
                dispatch(signupprovider(formData, history))
            }
        }
        else {
            dispatch(signinprovider(formData, history))
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
            <Container component="main" style={{ position: "relative", left: "12%" }} >
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
                                    
                                    <InputLabel style={{ margin: "27px",marginLeft:"100px" }} >Security Management *</InputLabel>
                                    <Select
                                        placeholder='Security'
                                        style={{ width: "290px", padding: "0.12rem",marginRight:"190px", marginTop: "0.6rem", marginBottom: "0.6rem", marginLeft: "30px" }}
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
                                 
                                    <InputLabel style={{ margin: "17px", marginLeft:"20px", marginLeft:"100px" }}  >Flexibility *</InputLabel>
                                    <Select
                                        style={{ width: "290px", padding: "0.12rem",marginRight:"230px", marginTop: "0.6rem", marginBottom: "0.6rem", marginLeft: "60px" }}
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

                                    <InputLabel style={{ margin: "17px", marginLeft:"18px" }}  >CPU Capacity *</InputLabel>
                                    <Select
                                        style={{ width: "290px", padding: "0.12rem",marginRight:"190px", marginTop: "0.6rem", marginBottom: "0.6rem", marginLeft: "60px" }}
                                        value={formData.cpu_capacity}
                                        label="CPU_Capacity"
                                        onChange={handleChange}
                                        name="cpu_capacity"
                                        variant='outlined'

                                    >
                                        <MenuItem value="None">None</MenuItem>
                                        <MenuItem value="Extremely High/ Extremely Good (EH/EG)">Extremely High/ Extremely Good (EH/EG)</MenuItem>
                                        <MenuItem value="Very High/Very Good (VH/VG)">Very High/Very Good (VH/VG)</MenuItem>
                                        <MenuItem value="Medium High/ Medium Good (MH/MG)">Medium High/ Medium Good (MH/MG)</MenuItem>
                                        <MenuItem value="Fair/Medium (F/M)">Fair/Medium (F/M)</MenuItem>
                                        <MenuItem value="Medium Low/Medium Bad (ML/MB)">Medium Low/Medium Bad (ML/MB)</MenuItem>
                                        <MenuItem value="Low/Bad (L/B)">Low/Bad (L/B)</MenuItem>
                                        <MenuItem value="Very Low/Very Bad (VL/VB)">Very Low/Very Bad (VL/VB)</MenuItem>
                                        <MenuItem value="Very Very Low/Very Very Bad (VVL/VVB)">Very Very Low/Very Very Bad (VVL/VVB)</MenuItem>
                                    </Select>

                                    <InputLabel style={{ margin: "17px", marginLeft:"18px" }}  >Memory Size *</InputLabel>
                                    <Select
                                        style={{ width: "290px", padding: "0.12rem",marginRight:"230px", marginTop: "0.6rem", marginBottom: "0.6rem", marginLeft: "60px" }}
                                        value={formData.memory_size}
                                        label="Memory Size"
                                        onChange={handleChange}
                                        name="memory_size"
                                        variant='outlined'

                                    >
                                        <MenuItem value="None">None</MenuItem>
                                        <MenuItem value="Extremely High/ Extremely Good (EH/EG)">Extremely High/ Extremely Good (EH/EG)</MenuItem>
                                        <MenuItem value="Very High/Very Good (VH/VG)">Very High/Very Good (VH/VG)</MenuItem>
                                        <MenuItem value="Medium High/ Medium Good (MH/MG)">Medium High/ Medium Good (MH/MG)</MenuItem>
                                        <MenuItem value="Fair/Medium (F/M)">Fair/Medium (F/M)</MenuItem>
                                        <MenuItem value="Medium Low/Medium Bad (ML/MB)">Medium Low/Medium Bad (ML/MB)</MenuItem>
                                        <MenuItem value="Low/Bad (L/B)">Low/Bad (L/B)</MenuItem>
                                        <MenuItem value="Very Low/Very Bad (VL/VB)">Very Low/Very Bad (VL/VB)</MenuItem>
                                        <MenuItem value="Very Very Low/Very Very Bad (VVL/VVB)">Very Very Low/Very Very Bad (VVL/VVB)</MenuItem>
                                    </Select>

                                    <InputLabel style={{ margin: "17px", marginLeft:"18px" }}  >Boot Time *</InputLabel>
                                    <Select
                                        style={{ width: "290px", padding: "0.12rem",marginRight:"190px", marginTop: "0.6rem", marginBottom: "0.6rem", marginLeft: "60px" }}
                                        value={formData.boot_time}
                                        label="Boot time"
                                        onChange={handleChange}
                                        name="boot_time"
                                        variant='outlined'

                                    >
                                        <MenuItem value="None">None</MenuItem>
                                        <MenuItem value="Extremely High/ Extremely Good (EH/EG)">Extremely High/ Extremely Good (EH/EG)</MenuItem>
                                        <MenuItem value="Very High/Very Good (VH/VG)">Very High/Very Good (VH/VG)</MenuItem>
                                        <MenuItem value="Medium High/ Medium Good (MH/MG)">Medium High/ Medium Good (MH/MG)</MenuItem>
                                        <MenuItem value="Fair/Medium (F/M)">Fair/Medium (F/M)</MenuItem>
                                        <MenuItem value="Medium Low/Medium Bad (ML/MB)">Medium Low/Medium Bad (ML/MB)</MenuItem>
                                        <MenuItem value="Low/Bad (L/B)">Low/Bad (L/B)</MenuItem>
                                        <MenuItem value="Very Low/Very Bad (VL/VB)">Very Low/Very Bad (VL/VB)</MenuItem>
                                        <MenuItem value="Very Very Low/Very Very Bad (VVL/VVB)">Very Very Low/Very Very Bad (VVL/VVB)</MenuItem>
                                    </Select>

                                    <InputLabel style={{ margin: "17px" }}  >Scale up (Max VM for a user) *</InputLabel>
                                    <Select
                                        style={{ width: "280px", padding: "0.12rem",marginRight:"190px", marginTop: "0.6rem", marginBottom: "0.6rem", marginLeft: "60px" }}
                                        value={formData.scale_up}
                                        label="Scale up"
                                        onChange={handleChange}
                                        name="scale_up"
                                        variant='outlined'

                                    >
                                        <MenuItem value="None">None</MenuItem>
                                        <MenuItem value="Extremely High/ Extremely Good (EH/EG)">Extremely High/ Extremely Good (EH/EG)</MenuItem>
                                        <MenuItem value="Very High/Very Good (VH/VG)">Very High/Very Good (VH/VG)</MenuItem>
                                        <MenuItem value="Medium High/ Medium Good (MH/MG)">Medium High/ Medium Good (MH/MG)</MenuItem>
                                        <MenuItem value="Fair/Medium (F/M)">Fair/Medium (F/M)</MenuItem>
                                        <MenuItem value="Medium Low/Medium Bad (ML/MB)">Medium Low/Medium Bad (ML/MB)</MenuItem>
                                        <MenuItem value="Low/Bad (L/B)">Low/Bad (L/B)</MenuItem>
                                        <MenuItem value="Very Low/Very Bad (VL/VB)">Very Low/Very Bad (VL/VB)</MenuItem>
                                        <MenuItem value="Very Very Low/Very Very Bad (VVL/VVB)">Very Very Low/Very Very Bad (VVL/VVB)</MenuItem>
                                    </Select>

                                    <InputLabel style={{ margin: "17px" }}  >Scale down (Min VM for a user) *</InputLabel>
                                    <Select
                                        style={{ width: "280px", padding: "0.12rem",marginRight:"190px", marginTop: "0.6rem", marginBottom: "0.6rem", marginLeft: "60px" }}
                                        value={formData.scale_down}
                                        label="Scale down"
                                        onChange={handleChange}
                                        name="scale_down"
                                        variant='outlined'

                                    >
                                        <MenuItem value="None">None</MenuItem>
                                        <MenuItem value="Extremely High/ Extremely Good (EH/EG)">Extremely High/ Extremely Good (EH/EG)</MenuItem>
                                        <MenuItem value="Very High/Very Good (VH/VG)">Very High/Very Good (VH/VG)</MenuItem>
                                        <MenuItem value="Medium High/ Medium Good (MH/MG)">Medium High/ Medium Good (MH/MG)</MenuItem>
                                        <MenuItem value="Fair/Medium (F/M)">Fair/Medium (F/M)</MenuItem>
                                        <MenuItem value="Medium Low/Medium Bad (ML/MB)">Medium Low/Medium Bad (ML/MB)</MenuItem>
                                        <MenuItem value="Low/Bad (L/B)">Low/Bad (L/B)</MenuItem>
                                        <MenuItem value="Very Low/Very Bad (VL/VB)">Very Low/Very Bad (VL/VB)</MenuItem>
                                        <MenuItem value="Very Very Low/Very Very Bad (VVL/VVB)">Very Very Low/Very Very Bad (VVL/VVB)</MenuItem>
                                    </Select>


                                    <InputLabel style={{ margin: "17px" }}  >Scale Up Time *</InputLabel>
                                    <Select
                                        style={{ width: "290px", padding: "0.12rem",marginRight:"190px", marginTop: "0.6rem", marginBottom: "0.6rem", marginLeft: "60px" }}
                                        value={formData.scale_up_time}
                                        label="Scale up Time"
                                        onChange={handleChange}
                                        name="scale_up_time"
                                        variant='outlined'

                                    >
                                        <MenuItem value="None">None</MenuItem>
                                        <MenuItem value="Extremely High/ Extremely Good (EH/EG)">Extremely High/ Extremely Good (EH/EG)</MenuItem>
                                        <MenuItem value="Very High/Very Good (VH/VG)">Very High/Very Good (VH/VG)</MenuItem>
                                        <MenuItem value="Medium High/ Medium Good (MH/MG)">Medium High/ Medium Good (MH/MG)</MenuItem>
                                        <MenuItem value="Fair/Medium (F/M)">Fair/Medium (F/M)</MenuItem>
                                        <MenuItem value="Medium Low/Medium Bad (ML/MB)">Medium Low/Medium Bad (ML/MB)</MenuItem>
                                        <MenuItem value="Low/Bad (L/B)">Low/Bad (L/B)</MenuItem>
                                        <MenuItem value="Very Low/Very Bad (VL/VB)">Very Low/Very Bad (VL/VB)</MenuItem>
                                        <MenuItem value="Very Very Low/Very Very Bad (VVL/VVB)">Very Very Low/Very Very Bad (VVL/VVB)</MenuItem>
                                    </Select>

                                    <InputLabel style={{ margin: "17px" }}  >Scale Down Time *</InputLabel>
                                    <Select
                                        style={{ width: "290px", padding: "0.12rem",marginRight:"190px", marginTop: "0.6rem", marginBottom: "0.6rem", marginLeft: "60px" }}
                                        value={formData.scale_down_time}
                                        label="Scale down Time"
                                        onChange={handleChange}
                                        name="scale_down_time"
                                        variant='outlined'

                                    >
                                        <MenuItem value="None">None</MenuItem>
                                        <MenuItem value="Extremely High/ Extremely Good (EH/EG)">Extremely High/ Extremely Good (EH/EG)</MenuItem>
                                        <MenuItem value="Very High/Very Good (VH/VG)">Very High/Very Good (VH/VG)</MenuItem>
                                        <MenuItem value="Medium High/ Medium Good (MH/MG)">Medium High/ Medium Good (MH/MG)</MenuItem>
                                        <MenuItem value="Fair/Medium (F/M)">Fair/Medium (F/M)</MenuItem>
                                        <MenuItem value="Medium Low/Medium Bad (ML/MB)">Medium Low/Medium Bad (ML/MB)</MenuItem>
                                        <MenuItem value="Low/Bad (L/B)">Low/Bad (L/B)</MenuItem>
                                        <MenuItem value="Very Low/Very Bad (VL/VB)">Very Low/Very Bad (VL/VB)</MenuItem>
                                        <MenuItem value="Very Very Low/Very Very Bad (VVL/VVB)">Very Very Low/Very Very Bad (VVL/VVB)</MenuItem>
                                    </Select>

                                    <InputLabel style={{ margin: "17px", marginLeft:"17px" }}  >Max configurable VMs for a user *</InputLabel>
                                    <Select
                                        style={{ width: "290px", padding: "0.12rem",marginRight:"380px", marginTop: "0.6rem", marginBottom: "0.6rem", marginLeft: "60px" }}
                                        value={formData.max_vm_configure}
                                        label="Max configurable VMs for a user"
                                        onChange={handleChange}
                                        name="max_vm_configure"
                                        variant='outlined'
                                        fullWidth

                                    >
                                        <MenuItem value="None">None</MenuItem>
                                        <MenuItem value="Extremely High/ Extremely Good (EH/EG)">Extremely High/ Extremely Good (EH/EG)</MenuItem>
                                        <MenuItem value="Very High/Very Good (VH/VG)">Very High/Very Good (VH/VG)</MenuItem>
                                        <MenuItem value="Medium High/ Medium Good (MH/MG)">Medium High/ Medium Good (MH/MG)</MenuItem>
                                        <MenuItem value="Fair/Medium (F/M)">Fair/Medium (F/M)</MenuItem>
                                        <MenuItem value="Medium Low/Medium Bad (ML/MB)">Medium Low/Medium Bad (ML/MB)</MenuItem>
                                        <MenuItem value="Low/Bad (L/B)">Low/Bad (L/B)</MenuItem>
                                        <MenuItem value="Very Low/Very Bad (VL/VB)">Very Low/Very Bad (VL/VB)</MenuItem>
                                        <MenuItem value="Very Very Low/Very Very Bad (VVL/VVB)">Very Very Low/Very Very Bad (VVL/VVB)</MenuItem>
                                    </Select>

                                    <InputLabel style={{ margin: "17px" }}  >Auto scaling *</InputLabel>
                                    <Select
                                        style={{ width: "290px", padding: "0.12rem",marginRight:"240px", marginTop: "0.6rem", marginBottom: "0.6rem", marginLeft: "60px" }}
                                        value={formData.auto_scaling}
                                        label="Auto Scaling"
                                        onChange={handleChange}
                                        name="auto_scaling"
                                        variant='outlined'

                                    >
                                        <MenuItem value="None">None</MenuItem>
                                        <MenuItem value="Extremely High/ Extremely Good (EH/EG)">Extremely High/ Extremely Good (EH/EG)</MenuItem>
                                        <MenuItem value="Very High/Very Good (VH/VG)">Very High/Very Good (VH/VG)</MenuItem>
                                        <MenuItem value="Medium High/ Medium Good (MH/MG)">Medium High/ Medium Good (MH/MG)</MenuItem>
                                        <MenuItem value="Fair/Medium (F/M)">Fair/Medium (F/M)</MenuItem>
                                        <MenuItem value="Medium Low/Medium Bad (ML/MB)">Medium Low/Medium Bad (ML/MB)</MenuItem>
                                        <MenuItem value="Low/Bad (L/B)">Low/Bad (L/B)</MenuItem>
                                        <MenuItem value="Very Low/Very Bad (VL/VB)">Very Low/Very Bad (VL/VB)</MenuItem>
                                        <MenuItem value="Very Very Low/Very Very Bad (VVL/VVB)">Very Very Low/Very Very Bad (VVL/VVB)</MenuItem>
                                    </Select>

                                    <InputLabel style={{ margin: "17px" }}  >Storage *</InputLabel>
                                    <Select
                                        style={{ width: "290px", padding: "0.12rem",marginRight:"190px", marginTop: "0.6rem", marginBottom: "0.6rem", marginLeft: "60px" }}
                                        value={formData.storage}
                                        label="Storage"
                                        onChange={handleChange}
                                        name="storage"
                                        variant='outlined'

                                    >
                                        <MenuItem value="None">None</MenuItem>
                                        <MenuItem value="Extremely High/ Extremely Good (EH/EG)">Extremely High/ Extremely Good (EH/EG)</MenuItem>
                                        <MenuItem value="Very High/Very Good (VH/VG)">Very High/Very Good (VH/VG)</MenuItem>
                                        <MenuItem value="Medium High/ Medium Good (MH/MG)">Medium High/ Medium Good (MH/MG)</MenuItem>
                                        <MenuItem value="Fair/Medium (F/M)">Fair/Medium (F/M)</MenuItem>
                                        <MenuItem value="Medium Low/Medium Bad (ML/MB)">Medium Low/Medium Bad (ML/MB)</MenuItem>
                                        <MenuItem value="Low/Bad (L/B)">Low/Bad (L/B)</MenuItem>
                                        <MenuItem value="Very Low/Very Bad (VL/VB)">Very Low/Very Bad (VL/VB)</MenuItem>
                                        <MenuItem value="Very Very Low/Very Very Bad (VVL/VVB)">Very Very Low/Very Very Bad (VVL/VVB)</MenuItem>
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