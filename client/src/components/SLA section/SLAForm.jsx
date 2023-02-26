import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DataContext } from '../SLAdata';
import { MenuItem, Select, Box, Container, Avatar, Typography, Paper, Button, Grid, InputLabel } from '@material-ui/core'
import { Link } from "react-router-dom";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBModal,
  MDBCardText,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBCardBody,
  MDBCardImage,
  MDBBtn, MDBInput,

  MDBAccordion, MDBAccordionItem

} from 'mdb-react-ui-kit';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '90%',
    margin: theme.spacing(1),
  },
}));

function SLAForm({ basicModal, setBasicModal, toggleShow }) {
  const classes = useStyles();
  const { slaFormData, setSlaFormData } = useContext(DataContext);

  /* const [formData, setFormData] = useState(slaData) */
  /* const [basicModal, setBasicModal] = useState(true)
  const toggleShow = () => setBasicModal(!basicModal); */

  const handleSubmit = (e) => {
    e.preventDefault();
    

    /* console.log(slaFormData); */





  }
  const handleChange = (e) => {
    setSlaFormData({ ...slaFormData, [e.target.name]: e.target.value })




  }

  return (
    <>
      <MDBModal staticBackdrop tabIndex='0' show={basicModal} setShow={setBasicModal} >
        <MDBModalDialog scrollable size='xl' >
          <MDBModalContent >
            <MDBModalHeader>
              <MDBModalTitle> <strong>Service-Level Agreement Template</strong> </MDBModalTitle>
              <Link to="/userHome"><MDBBtn className='btn-close' color='none' onClick={toggleShow} ></MDBBtn></Link>
            </MDBModalHeader>
            <form onSubmit={handleSubmit} >
              <Box display={'flex'} style={{ margin: "25px" }} >
                <InputLabel style={{ margin: "25px" }}>CPU Capacity *</InputLabel>
                <Select

                  value={slaFormData.cpu_capacity}
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

                <InputLabel style={{ margin: "25px" }} >Memory Size *</InputLabel>
                <Select
                  value={slaFormData.memory_size}
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

              </Box>

              <Box display={'flex'} style={{ margin: "25px" }} >
                <InputLabel style={{ margin: "25px" }}>Boot Time *</InputLabel>
                <Select

                  value={slaFormData.boot_time}
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

                <InputLabel style={{ margin: "25px" }} >Scale up  *</InputLabel>
                <Select

                  value={slaFormData.scale_up}
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

              </Box>

              <Box display={'flex'} style={{ margin: "25px" }} >
                <InputLabel style={{ margin: "25px" }}>Scale down *</InputLabel>
                <Select

                  value={slaFormData.scale_down}
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

                <InputLabel style={{ margin: "25px" }} >Scale Up Time *</InputLabel>
                <Select

                  value={slaFormData.scale_up_time}
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

              </Box>
              <Box display={'flex'} style={{ margin: "25px" }} >
                <InputLabel style={{ margin: "25px" }}>Scale Down Time*</InputLabel>
                <Select

                  value={slaFormData.scale_down_time}
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
                <InputLabel style={{ margin: "25px" }} >Max configurable VMs*</InputLabel>
                <Select

                  value={slaFormData.max_vm_configure}
                  label="Max configurable VMs for a user"
                  onChange={handleChange}
                  name="max_vm_configure"
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

              </Box>

              <Box display={'flex'} style={{ margin: "25px" }} >
                <InputLabel style={{ margin: "25px" }}>Auto scaling *</InputLabel>
                <Select

                  value={slaFormData.auto_scaling}
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
                <InputLabel style={{ margin: "25px" }} >Storage *</InputLabel>
                <Select

                  value={slaFormData.storage}
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

              </Box>







              <MDBModalFooter>

                <Link to="/userHome">
                  <MDBBtn color='secondary' >
                    Close
                  </MDBBtn>
                </Link>

                <MDBBtn color='success' type='submit' onClick={toggleShow}  >Submit</MDBBtn>


              </MDBModalFooter>
            </form>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  )
}

export default SLAForm;
