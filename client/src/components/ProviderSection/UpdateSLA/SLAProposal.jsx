import React,{useState} from 'react'
import { MenuItem, Select, Container, Avatar, Typography, Paper, Button, Grid, InputLabel } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from '../ProviderAuth/styles'
import Input from '../../Auth/Input';
import Navbar from '../ProviderNav/ProviderNav';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signinprovider, signupprovider, updateInfo } from '../../../actions/userActions';

const SLAProposal = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    
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
            <Container component="main"  style={{position:"relative",left:"12%"}} >
                <Paper className={classes.paper} elevation={3} >
                    <Avatar className={classes.avatar} >
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant='h5'> SLA Proposal </Typography>

                    <form className={classes.form} onSubmit={handleSubmit} >
                        <Grid container spacing={2} >
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
                              
                            
                        </Grid>
                        <Button color='primary' onClick={handleSubmit} variant='contained' className={classes.submit} type='submit' fullWidth  >Update Now</Button>

                    </form>
                </Paper>

            </Container>
    </>
  )
}

export default SLAProposal