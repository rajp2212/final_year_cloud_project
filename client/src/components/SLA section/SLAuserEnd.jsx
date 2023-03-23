import React, { useState } from 'react'
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
import SLAForm from './SLAForm';
const SLAuserEnd = () => {
  const options = ["100%", ">50%", "<50%"];

  function getRandomOption() {
    const randomNumber = Math.random();
    if (randomNumber < 0.33) {
      return options[0];
    } else if (randomNumber < 0.66) {
      return options[1];
    } else {
      return options[2];
    }
  }


  const [basicModal, setBasicModal] = useState(true)
  const toggleShow = () => setBasicModal(!basicModal);
  const [basicModal1, setBasicModal1] = useState(true)
  const toggleShow1 = () => setBasicModal1(!basicModal1);
  return (
    <>
      <MDBModal staticBackdrop tabIndex='-1' show={basicModal} setShow={setBasicModal} >
      {/* <SLAForm basicModal={basicModal1} setBasicModal={setBasicModal1} toggleShow={toggleShow1} /> */}
        <MDBModalDialog scrollable size='xl' >
        
          <MDBModalContent >
            <MDBModalHeader>
              <MDBModalTitle> <strong>Service-Level Agreement</strong> </MDBModalTitle>
              <Link to="/userHome/filter"><MDBBtn className='btn-close' color='none' onClick={toggleShow} ></MDBBtn></Link>
            </MDBModalHeader>
            <MDBModalBody >
              <MDBModalTitle> <b>About the agreement</b> </MDBModalTitle>
              <ul style={{ textAlign: "left" }}>
                <li>This Service-Level Agreement (this "Agreement" or this "Service Level Agreement"), effective as of purchasing date is made by and between Service Provider and User.</li>
                <li>WHEREAS, the Parties have entered into an agreement effective as of purchasing date(the "Contract") for the provision by Supplier of the Services (as defined therein) (the "Services"); and
                  WHEREAS, the Contract states that a service-level agreement is a condition precedent to any extended term of the Contract; and
                </li>
                <li>WHEREAS, the Customer/User is willing to continue with the Contract past the original end date solely upon Supplier's acceptance of the terms and conditions of this Agreement, and Supplier confidently accepts the terms and conditions here in;</li>
                <li>NOW, THEREFORE, in consideration of the foregoing, and of the terms and conditions and the Service Levels, the Parties hereby agree as is outlined in the following sections:</li>

              </ul>
              <MDBAccordion initialActive={1} >
                <MDBAccordionItem collapseId={1} headerTitle='1. Rider Agreement'>
                  <ul style={{ textAlign: "left" }}>
                    <li>A service-level agreement isn't necessarily a stand-alone contract. Instead, service-level agreements are created as additions to existing contracts. They provide the specificity of service expectations if the original contract requires more detail. Keep in mind that the service-level agreement does not alter any terms of the original contract.</li>
                    <li>When signed, this Agreement will form a part of the Contract, and upon signing this Agreement, the Contract shall be automatically changed, in accordance with its terms, from a monthly contract to a yearly contract. All capitalized terms not defined herein shall have the meanings ascribed to them in the Contract.</li>
                  </ul>
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={2} headerTitle='2. Responsibilities'>
                  <ul style={{ textAlign: "left" }}>
                    <li>Both parties who enter the agreement share the burden of responsibility. Make sure your customers or business partners know what their role is in meeting service-level agreements. If either the business or the customer experience business changes that impact the validity of this agreement or service delivery, amendments to the SLA must be made in writing.</li>
                    <li>User responsibilities:
                      User must provide all of the necessary information and assistance-related needs for service performance that allows the Service Provider to meet the service level standards as outlined in this agreement.
                      <ul>
                        <li>User shall inform Service Provider if there are any business changes that may require a review, modification, or amendment of the service-level agreements.</li>
                      </ul>
                    </li>
                    <li>
                    Service Provider responsibilities:
                    <ul><li>Service Provider acts as the primary provider of the services that are identified in this agreement, except if outsourcing is done to a third-party vendor. In that case, the third party assumes any support responsibilities that align with their services.</li></ul>
                    </li>
                  </ul>
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={3} headerTitle='3.Service Levels & Service Credits'>
                 <ul style={{ textAlign: "left" }}>
                  <li>It is important to set realistic expectations because this section outlines service credits that a business or customer receives when service-level agreements aren't met. If you set the bar too high, you'll be left paying out a lot in fees and disappointing customers.</li>
                <li>The Supplier shall at all times during the term of this Agreement provide the Services to meet or exceed the Service Level Performance Measure for each Service Level Performance Criterion, as defined herein below.</li>
                <li>Other than the Customer's termination rights as set forth in the Contract, a Service Credit shall be the Customer's exclusive financial remedy for a failure to meet a Service Level.</li>
                 </ul>
                 </MDBAccordionItem>
                <MDBAccordionItem collapseId={4} headerTitle='4. Performance Monitoring'>
                <ul style={{ textAlign: "left" }}>
                  <li>Consider implementing a risk management team and strategy if you don't already have them in place. This team can help monitor risks associated with service level expectations and the repercussions of not meeting them for customers. They can also conduct a periodic review of all performance data to see where general improvements can be made.</li>
                  <li>The Supplier shall implement all measurement and monitoring tools and procedures necessary to measure, monitor, and report on the Supplier's performance of the provision of the Services against the applicable Service Levels at a level of detail sufficient to verify compliance with the Service Levels.</li>
                  <li>The Supplier shall immediately notify the Customer in writing if the level of performance of the Supplier of any element of the provision by it of the Services during the term of the Contract is likely to or fails to meet any Service Level Performance Measure.</li>
                </ul>
                  </MDBAccordionItem>
                <MDBAccordionItem collapseId={5} headerTitle='5. Objectives'>
                  <ul style={{ textAlign: "left" }}>
                    <li>Consider this section the purpose of the agreement. Provide an overarching outline of expectations for goals, communication, and delivery of results. Use the drag-and-drop feature to customize these objectives to your specific service-level agreement needs.</li>
                    <li>
                    Objectives provide measurable steps for reaching your business goals. They set a basis for each strategy and tactic used. The objectives of the Service Levels and Service Credits are to:
                    <ul>
                      <li>Ensure that the Services are of a consistently high quality and meet the requirements of the Customer.</li>
                      <li>Provide a mechanism whereby the User can attain meaningful recognition of the Supplier's failure to deliver the level of service for which it has contracted to deliver.</li>
                      <li>Incentivize the Supplier to comply with and to expeditiously remedy any failure to comply with the Service Levels.</li>
                    </ul>
                    </li>
                  </ul>
                  </MDBAccordionItem>
                <MDBAccordionItem collapseId={6} headerTitle='6. Service Levels'>
                  <ul style={{ textAlign: "left" }}>
                    <li>Service levels are the actionable items you can complete for your client or partners. Each one needs to be measurable so that results are accurate and easy for your clients or partners to understand. Items you may include in your SLA metrics include:
                    <ul>
                    <li>•	Response time</li>
                    <li>•	Service availability</li>
                    </ul>
                    </li>
                    <li> <b>Response Time:-</b> Response time, in the context of computer technology, is the elapsed time between an inquiry on a system and the response to that inquiry. Used as a measurement of system performance, response time may refer to service requests in a variety of technologies. Low response times may be critical to successful computing.</li>
                    <li> <b>Availability:-</b> For cloud infrastructure solutions, availability relates to the time that the data center is accessible or delivers the intend IT service as a proportion of the duration for which the service is purchased.</li>
                  </ul>


                  </MDBAccordionItem>
                <MDBAccordionItem collapseId={6} headerTitle='7. Service Exceptions and Limitations'>
                 <ul style={{ textAlign: "left" }}>
                  <li>It's important to plan for the unexpected. When something happens that is beyond your control, you may not be able to complete the service level agreement at the expected level. It's important to take these factors into consideration when making service guarantees to your customers.</li>
                  <li>The Supplier may need to outline exceptions to your service level agreements in the Contract that apply to certain regions or times of the year. For example, if The Supplier provides a technology service that can be impacted by natural disasters, The Supplier may exclude those downtimes from your SLA.</li>
                  <li>If the Supplier provides customer service that may be impacted at very busy times of the year, like the holiday season, they may exclude those high volumes from the SLAs in the Contract. Whatever the specific business needs are for the Supplier, take them into consideration when creating exceptions.</li>
                 </ul>
                  </MDBAccordionItem>
              </MDBAccordion>
            </MDBModalBody>

            <MDBModalFooter>
            {/* <h5 style={{textAlign:"left"}}>  Total SLA Matching is <b>{getRandomOption()}</b></h5> */}
              <Link to="/userHome/filter">
              <MDBBtn color='secondary' >
                Close
              </MDBBtn>
              </Link>

              <MDBBtn color='success' onClick={toggleShow}  >Accept</MDBBtn>


            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  )
}

export default SLAuserEnd