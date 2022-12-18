import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import "../../ProviderSection/PrivateSection/CSS/TotalBusiness.css";
import { AiOutlineShoppingCart, AiOutlineLock, AiOutlineThunderbolt, AiFillClockCircle, AiOutlineApartment } from "react-icons/ai";
import { RiRadioButtonLine } from "react-icons/ri";
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
  MDBListGroup,
  MDBDropdownToggle,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu

} from 'mdb-react-ui-kit';
import { addResource } from '../../../actions/userActions';
import SLAuserEnd from '../../SLA section/SLAuserEnd';

export default function ResourcePage({ data, proId }) {
  /* console.log(data); */


  const dispatch = useDispatch();
  const history = useHistory();
 const ProviderId={idx:proId}
  var instance=JSON.parse(localStorage.getItem('profile'));
  var userId=instance.result._id;

 
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);
  


  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",

    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  const loadScript = (src) => {
    return new Promise((resovle) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resovle(true);
      };

      script.onerror = () => {
        resovle(false);
      };

      document.body.appendChild(script);
    });
  };
const displayRazorpay = async (amount) => {
  
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline... Failed to load Razorpay SDK");
      return;
    }

    const options = {
      key: "rzp_test_OzDVmG11Gbzsy3",
      currency: "INR",
      amount: amount * 100,
      name: "Rajwardhan Pawar",
      description: "Thanks for purchasing",
      image:
        "https://upload.wikimedia.org/wikipedia/en/a/ae/Devi_Ahilya_Vishwavidyalaya_Logo.png",

      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert("Payment Successfully");
        dispatch(addResource(userId,ProviderId,history))
      },
      prefill: {
        name: "Rajwardhan Pawar",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer >
     
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://img.icons8.com/color-glass/150/000000/cloud-user.png"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '130px' }}
                  fluid />
                <h4 className=" mb-1">{data.name}</h4>
                <p className="text-muted mb-4">{data.email}</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn onClick={toggleShow} >Buy</MDBBtn>
                  <SLAuserEnd/>
                  <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='2'>
                    <MDBModalDialog>
                      <MDBModalContent>
                        <MDBModalHeader>
                          <MDBModalTitle>{data.name}</MDBModalTitle>
                          <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                          Cost summary of user desired Virtual Machines and Payment page
                        </MDBModalBody>

                        <MDBModalFooter>
                          <MDBBtn color='secondary' onClick={toggleShow}>
                            Close
                          </MDBBtn>
                       
                          <button onClick={() => displayRazorpay(data.cost)}  >Buy Now</button>
                         
                          
                        </MDBModalFooter>
                      </MDBModalContent>
                    </MDBModalDialog>
                  </MDBModal>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBDropdown group className='shadow-0'>
                    <MDBDropdownToggle color='link'>Select Region</MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem link>Global</MDBDropdownItem>
                      <MDBDropdownItem link>Asia</MDBDropdownItem>
                      <MDBDropdownItem link>South America</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <h4 className="text-center mp-1 mb-1">Main Features</h4>
              <div className="row_boxes">


                <div className="row_boxes_inner" >
                  <div className="first">
                    <p className="number">{data.network_bandwidth} Mbps</p>
                    <p className="title">Bandwidth</p>
                  </div>
                  <div className="second">
                    <AiOutlineThunderbolt />
                  </div>
                </div>
                <div className="row_boxes_inner" >
                  <div className="first">
                    <p className="number">{data.response_time} ms</p>
                    <p className="title">Average Response Time</p>
                  </div>
                  <div className="second">
                    <AiFillClockCircle />
                  </div>
                </div>
                <div className="row_boxes_inner" >
                  <div className="first">
                    <p className="number">{data.security_management}</p>
                    <p className="title">Security Management</p>
                  </div>
                  <div className="second">
                    <AiOutlineLock />
                  </div>
                </div>

              </div>
              <div className="row_boxes">

                <div className="row_boxes_inner" >
                  <div className="first">
                    <p className="number">{formatter.format(data.cost)} /month</p>
                    <p className="title">Monthly Cost</p>
                  </div>
                  <div className="second">
                    <AiOutlineShoppingCart />
                  </div>
                </div>
                <div className="row_boxes_inner" >
                  <div className="first">
                    <p className="number">{data.available_VM}</p>
                    <p className="title">Available virtual machines</p>
                  </div>
                  <div className="second">
                    <AiOutlineApartment />
                  </div>
                </div>
                <div className="row_boxes_inner" >
                  <div className="first">
                    <p className="number">{data.flexibility}</p>
                    <p className="title">Flexibility</p>
                  </div>
                  <div className="second">
                    <RiRadioButtonLine />
                  </div>
                </div>

              </div>

            </MDBCard>


          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
