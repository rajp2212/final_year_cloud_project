import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  TextField,
} from '@material-ui/core';
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
  MDBBtn,

  MDBAccordion, MDBAccordionItem

} from 'mdb-react-ui-kit';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '90%',
    margin: theme.spacing(1),
  },
}));

function SLAForm({basicModal,setBasicModal,toggleShow}) {
  const classes = useStyles();
  const [cpuArchitecture, setCpuArchitecture] = React.useState('');
  const [cpuSpeed, setCpuSpeed] = React.useState('');
  const [memory, setMemory] = React.useState('');
  const [numCpu, setNumCpu] = React.useState('');

  /* const [basicModal, setBasicModal] = useState(true)
  const toggleShow = () => setBasicModal(!basicModal); */

  const handleChange = (event) => {
    switch (event.target.name) {
      case 'cpuArchitecture':
        setCpuArchitecture(event.target.value);
        break;
      case 'cpuSpeed':
        setCpuSpeed(event.target.value);
        break;
      case 'memory':
        setMemory(event.target.value);
        break;
      case 'numCpu':
        setNumCpu(event.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <>
    <MDBModal staticBackdrop tabIndex='0' show={basicModal} setShow={setBasicModal} >
        <MDBModalDialog scrollable size='xl' >
          <MDBModalContent >
<form>
      <FormControl className={classes.formControl}>
        <InputLabel id="cpuArchitecture-label">CPU Architecture</InputLabel>
        <Select
          labelId="cpuArchitecture-label"
          id="cpuArchitecture"
          name="cpuArchitecture"
          value={cpuArchitecture}
          onChange={handleChange}
        >
          <MenuItem value="extremely good">extremely good</MenuItem>
          <MenuItem value="very good">very good</MenuItem>
          <MenuItem value="good">good</MenuItem>
          <MenuItem value="fair">fair</MenuItem>
          <MenuItem value="bad">bad</MenuItem>
          <MenuItem value="very bad">very bad</MenuItem>
        </Select>
        <FormHelperText>Select CPU architecture rating</FormHelperText>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="cpuSpeed-label">CPU Speed</InputLabel>
        <Select
          labelId="cpuSpeed-label"
          id="cpuSpeed"
          name="cpuSpeed"
          value={cpuSpeed}
          onChange={handleChange}
        >
          <MenuItem value="extremely good">extremely good</MenuItem>
          <MenuItem value="very good">very good</MenuItem>
          <MenuItem value="good">good</MenuItem>
          <MenuItem value="fair">fair</MenuItem>
          <MenuItem value="bad">bad</MenuItem>
          <MenuItem value="very bad">very bad</MenuItem>
        </Select>
        <FormHelperText>Select CPU Speed rating</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="memory-label">Memory</InputLabel>
        <Select
          labelId="memory-label"
          id="memory"
          name="memory"
          value={memory}
          onChange={handleChange}
        >
          <MenuItem value="extremely good">extremely good</MenuItem>
          <MenuItem value="very good">very good</MenuItem>
          <MenuItem value="good">good</MenuItem>
          <MenuItem value="fair">fair</MenuItem>
          <MenuItem value="bad">bad</MenuItem>
          <MenuItem value="very bad">very bad</MenuItem>
        </Select>
        <FormHelperText>Select CPU memory</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="numCpu-label">Number of CPU</InputLabel>
        <Select
          labelId="numCpu-label"
          id="numCpu"
          name="numCpu"
          value={numCpu}
          onChange={handleChange}
        >
          <MenuItem value="extremely good">extremely good</MenuItem>
          <MenuItem value="very good">very good</MenuItem>
          <MenuItem value="good">good</MenuItem>
          <MenuItem value="fair">fair</MenuItem>
          <MenuItem value="bad">bad</MenuItem>
          <MenuItem value="very bad">very bad</MenuItem>
        </Select>
        <FormHelperText>Select Number of CPU</FormHelperText>
      </FormControl>
    
      
      </form>
      <MDBModalFooter>
          
              <Link to="/userHome/filter">
              <MDBBtn color='secondary' >
                Close
              </MDBBtn>
              </Link>

              <MDBBtn color='success' onClick={toggleShow}  >Submit</MDBBtn>


            </MDBModalFooter>
      </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  )
}

export default SLAForm;
    