import React,{useState} from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";
import Cloudpfp from '../../../images/cloudPfp.jpg'
import { Link } from "react-router-dom";

function ResourceList(props) {
   const [toggle, settoggle] = useState(true)
    const toggleClick=()=>{
        settoggle(!toggle)
    }
  return (
    <div >
    <MDBContainer fluid>
      <MDBRow className="justify-content-center mb-0">
        <MDBCol md="12" xl="10">
          <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
            <MDBCardBody  className={toggle?"toggleOff":"toggleOn"} >
              <MDBRow>
                <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom hover-overlay"
                  >
                    <MDBCardImage
                      src={Cloudpfp}
                      fluid
                      className="w-100"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                </MDBCol>
                <MDBCol md="6">
                  <h5>{props.heading}</h5>
                  <div className="d-flex flex-row">
                    <div className="text-danger mb-1 me-2">
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                    </div>
                    <span>{props.mail}</span>
                  </div>
                  <div className="mt-1 mb-0 text-muted small">
                    <span>Security Status</span>
                    <span className="text-primary"> • </span>
                    <span>-</span>
                    <span className="text-primary"> • </span>
                    <span>
                      {props.security}
                      <br />
                    </span>
                  </div>
                  
                  
                </MDBCol>
                <MDBCol
                  md="6"
                  lg="3"
                  className="border-sm-start-none border-start"
                >
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">{props.bandwidth}</h4>
                    <span className="text-success">
                      <s>/Mbps</s>
                    </span>
                  </div>
                  <h6 className="text-danger">Bandwidth</h6>
                  <div className="d-flex flex-column mt-4">
                    <MDBBtn color="primary" size="sm">
                    <Link style={{color:"white"}} to={`/resource/${props.idx}`}> Details</Link >
                     
                    </MDBBtn>
                    <MDBBtn  onClick={toggleClick}  outline color="primary" size="sm" className="mt-2">
                      {toggle?"Freeze Service":"Freezed"}
                    </MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      
    </MDBContainer>
    </div>
  );
}

export default ResourceList;