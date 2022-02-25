import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FooterSection from './FooterSection'
import { FooterMainContainer } from './StyledFooter'
import './Footer.css';
import footerLogo from '../../../assets/footer-logo.png'

const Footer = () => {
    const company = ['About Us', 'Jobs', 'Data Protection', 'Privacy Policy', 'Cookie Policy', 'FAQ', 'FAQ', 'Career Opportunities', 'Investment Opportunities']
    const tradingAddress = ['European Union Administration Correos No 77 Plaça de la Font, 12 08880 Cubelles Barcelona']
    const marketplace = ['Edibles & Drink',
        'Growth Materials',
        'Lighting Equipment',
        ' Seeds & Flower',
        ' Sativa, Indica & Hybrids',
        'Vaporizers & Inhalants']
    const medical = ['Appointment Calendar',
        'Zoom Consultation',
        'Diagnose',
        ' Dispensaries',
        'Doctors Registry',
        ' Pharmacy',
        'Investor Opportunity']
    const advertising = ['Product Assessment',
        'Product TÜV Testing',
        'Product Placement',
        ' Product Advertising',
        'Product Marketing',
        'Assessment Policy',
        'Assessment Terms',
        'Assessment Conditions',
        'Advertising Campaigns',
        'Advertising Specifications',
        'Advertising Rate Card'];
    const community = ['News',
        'Legislation',
        'Agriculturist',
        ' Marijuana Medicine',
        'Glossary',
        'Blog & Vlog',
        'Events',
        ' YouTube Channel',
        ' Second Life Medical Devices']
    const registeredAddress = [
        ' Avenue Ceramique 00221 6221KX Maastricht, Limburg, Holland',

        'Reg N° NL 2020V0022818',

        'Tax N° NL 862241133B01'
    ]
    const callRegistered = ['World Trade Center Barcelona Muelle de Barcelona Moll de Barcelona, s/n, 08039 Barcelona, Spain']
    const aToZ = ['Apparel',
        'Beauty',
        'Care',
        'Danger of dabbing',
        'Edibles',
        'Fenchol',
        'Genotype',
        'Hemp',
        'Indica',
        'Jelly hash',
        'Kief']
    const partners = ['B2B',
        ' SMB’s',
        ' Pharmaceutical Companies',
        'Manufacturer',
        'Distributers',
        'Wholesalers',
        'Retailers',
        'Private Sellers',
        'Competitions',
        ' Special Offers',
        'Clearances']
    const services = ['Store Example',
        'Store Consultation',
        'Dispensary Store Rental',
        ' Store Design',
        'Store Installation',
        ' Store Population',
        ' Store Marketing',
        ' Dispensary Architect',
        ' Dispensary Installation',
        'Dispensary Marketing']
    const affiliates = ['Affiliate Marketing',
        '  Affiliated Rewards',
        'How to be Affiliated ?']
    const helpCenter = ['Know Hemp',
        'Drug Intervention',
        '  Recall Notification',
        ' Legal Assistance',
        'Lawyers Registry',
        'Product Support',
        'Request',
        ' Special Order',
        'Feedback',
        ' Contact Us',
        'Chat']
    return (
        <Container className="container-xl">
            <Row className="row">
                <Col md={2}>
                    <h2 className="col-heading mb-3">TRADING ADDRESS</h2>
                    <ul className="list-unstyled footer-ul">
                        <li>
                            <p className="mb-4">European Union Administration

                                Correos No 77

                                Plaça de la Font, 12

                                08880 Cubelles Barcelona</p>
                        </li>
                    </ul>
                    <h2 className="col-heading mb-3">REGISTERED ADDRESS</h2>
                    <ul className="list-unstyled footer-ul">
                        <li>
                            <p className="mb-2">Avenue Ceramique 00221
                                6221KX Maastricht, Limburg,
                                Holland
                            </p>
                        </li>
                        <li>
                            <p className="fw-bold mb-0">Reg N° NL 2020V0022818</p>
                        </li>
                        <li>
                            <p className="fw-bold mb-4">Tax N° NL 862241133B01</p>
                        </li>
                    </ul>
                    <h2 className="col-heading mb-3">REGISTERED ADDRESS</h2>
                    <ul className="list-unstyled footer-ul">
                        <li>
                            <p>
                                World Trade Center Barcelona
                                Muelle de Barcelona
                                Moll de Barcelona, s/n,
                                08039 Barcelona, Spain
                            </p>
                        </li>
                        <li className="mb-1">
                            <span>
                                <img src="./assets/images/usa.png" alt="USA Flag" /><span className="footer-span">+1 (213) 370
                                    0873</span>
                            </span>
                        </li>
                        <li>
                            <span>
                                <img src="./assets/images/europe.png" alt="USA Flag" /><span className="footer-span">+31 938 022
                                    780</span>
                            </span>
                        </li>
                        <li>
                            <span>
                                <img src="./assets/images/mail.png" alt="USA Flag" /><span
                                    className="footer-span">assist@hporx.com</span>
                            </span>
                        </li>
                    </ul>
                    <div>
                        <img src={"../assets/images/footer-logo.png"} alt="footer-logo" />
                    </div>
                </Col>
                <Col md={10} >
                    <Row className="inner-row">
                        <Col md={2}>
                            <h2 className="col-heading mb-3">Company</h2>
                            <ul className="list-unstyled second-ul">
                                <li>
                                    About Us
                                </li>
                                <li>
                                    Jobs
                                </li>
                                <li>
                                    Data Protectio
                                </li>
                                <li>
                                    Privacy Policy
                                </li>
                                <li>
                                    Cookie Policy
                                </li>
                                <li>
                                    FAQ
                                </li>
                                <li>
                                    Career Opportunities
                                </li>
                                <li>
                                    Investment Opportunities
                                </li>
                                <li>
                                    Teams
                                </li>
                            </ul>
                        </Col>
                        <Col md={2}>
                            <h2 className="col-heading mb-3">MARKETPLACE</h2>
                            <ul className="list-unstyled second-ul">
                                <li>
                                    Fabric
                                </li>
                                <li>
                                    Finished Goods
                                </li>
                                <li>
                                    Manufactured Goods
                                </li>
                                <li>
                                    Health & Fitness
                                </li>
                                <li>
                                    Hygiene & Beauty
                                </li>
                                <li>
                                    Edibles & Drink
                                </li>
                                <li>
                                    Growth Materials
                                </li>
                                <li>
                                    Lighting Equipment
                                </li>
                                <li>
                                    Seeds & Flower
                                </li>
                                <li>
                                    Sativa, Indica & Hybrids
                                </li>
                                <li>
                                    Vaporizers & Inhalants
                                </li>
                            </ul>
                        </Col>
                        <Col md={2}>
                            <h2 className="col-heading mb-3">Medical</h2>
                            <ul className="list-unstyled second-ul">
                                <li>
                                    Appointment Calendar
                                </li>
                                <li>
                                    Zoom Consultation
                                </li>
                                <li>
                                    Diagnose
                                </li>
                                <li>
                                    Dispensaries
                                </li>
                                <li>
                                    Doctors Registry
                                </li>
                                <li>
                                    Pharmacy
                                </li>
                                <li>
                                    Investor Opportunity
                                </li>
                            </ul>
                        </Col>
                        <Col md={2}>
                            <h2 className="col-heading mb-3">ADVERTISING</h2>
                            <ul className="list-unstyled second-ul">
                                <li>
                                    Product Assessment
                                </li>
                                <li>
                                    Product TÜV Testing
                                </li>
                                <li>
                                    Product Placement
                                </li>
                                <li>
                                    Product Advertising
                                </li>
                                <li>
                                    Product Marketing
                                </li>
                                <li>
                                    Assessment Policy
                                </li>
                                <li>
                                    Assessment Terms
                                </li>
                                <li>
                                    Assessment Conditions
                                </li>
                                <li>
                                    Advertising Campaigns
                                </li>
                                <li>
                                    Advertising Specifications
                                </li>
                                <li>
                                    Advertising Rate Card
                                </li>
                            </ul>
                        </Col>
                        <Col md={2}>
                            <h2 className="col-heading mb-3">COMMUNITY</h2>
                            <ul className="list-unstyled second-ul">
                                <li>
                                    News
                                </li>
                                <li>
                                    Legislation
                                </li>
                                <li>
                                    Agriculturist
                                </li>
                                <li>
                                    Marijuana Medicine
                                </li>
                                <li>
                                    Glossary
                                </li>
                                <li>
                                    Blog & Vlog
                                </li>
                                <li>
                                    Events
                                </li>
                                <li>
                                    YouTube Channel
                                </li>
                                <li>
                                    Second Life Medical Devices
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="row mt-4 inner-row">
                        <Col md={2}>
                            <h2 className="col-heading mb-3">A to Z SITE INDEX</h2>
                            <ul className="list-unstyled second-ul">
                                <li>
                                    Apparel
                                </li>
                                <li>
                                    Beauty
                                </li>
                                <li>
                                    Care
                                </li>
                                <li>
                                    Danger of dabbing
                                </li>
                                <li>
                                    Edibles
                                </li>
                                <li>
                                    Fenchol
                                </li>
                                <li>
                                    Genotype
                                </li>
                                <li>
                                    Hemp
                                </li>
                                <li>
                                    Indica
                                </li>
                                <li>
                                    Jelly hash
                                </li>
                                <li>
                                    Kief
                                </li>
                            </ul>
                        </Col>
                        <Col md={2}>
                            <h2 className="col-heading mb-3">PARTNERS</h2>
                            <ul className="list-unstyled second-ul">
                                <li>
                                    B2B
                                </li>
                                <li>
                                    SMB’s
                                </li>
                                <li>
                                    Pharmaceutical Companies
                                </li>
                                <li>
                                    Manufacturer
                                </li>
                                <li>
                                    Distributers
                                </li>
                                <li>
                                    Wholesalers
                                </li>
                                <li>
                                    Retailers
                                </li>
                                <li>
                                    Private Sellers
                                </li>
                                <li>
                                    Competitions
                                </li>
                                <li>
                                    Special Offers
                                </li>
                                <li>
                                    Clearances
                                </li>
                            </ul>
                        </Col>
                        <Col md={2}>
                            <h2 className="col-heading mb-3">SERVICES</h2>
                            <ul className="list-unstyled second-ul">
                                <li>
                                    Store Example
                                </li>
                                <li>
                                    Store Consultation
                                </li>
                                <li>
                                    Dispensary Store Rental
                                </li>
                                <li>
                                    Store Design
                                </li>
                                <li>
                                    Store Installation
                                </li>
                                <li>
                                    Store Population
                                </li>
                                <li>
                                    Store Marketing
                                </li>
                                <li>
                                    Dispensary Architect
                                </li>
                                <li>
                                    Dispensary Installation
                                </li>
                                <li>
                                    Dispensary Marketing
                                </li>
                            </ul>
                        </Col>
                        <Col md={2}>
                            <h2 className="col-heading mb-3">AFFILIATES</h2>
                            <ul className="list-unstyled second-ul">
                                <li>
                                    Affiliate Marketing
                                </li>
                                <li>
                                    Affiliated Rewards
                                </li>
                                <li>
                                    How to be Affiliated?
                                </li>
                            </ul>
                        </Col>
                        <Col md={2}>
                            <h2 className="col-heading mb-3">HELP CENTER</h2>
                            <ul className="list-unstyled second-ul">
                                <li>
                                    Know Hemp
                                </li>
                                <li>
                                    Drug Intervention
                                </li>
                                <li>
                                    Recall Notification
                                </li>
                                <li>
                                    Legal Assistance
                                </li>
                                <li>
                                    Lawyers Registry
                                </li>
                                <li>
                                    Product Support
                                </li>
                                <li>
                                    Request
                                </li>
                                <li>
                                    Special Order
                                </li>
                                <li>
                                    Feedback
                                </li>
                                <li>
                                    Contact Us
                                </li>
                                <li>
                                    Chat
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="row justify-content-end align-items-center ">
                <Col md={2} className="col-auto">
                    <div>
                        <img src="./assets/images/SSL_certificate.png" alt="" />
                    </div>
                </Col>
                <Col md={2} className="col-auto">
                    <div>
                        <img src="./assets/images/trust.png" alt="" />
                    </div>
                </Col>
                <Col md={2} className="col-auto">
                    <div>
                        <img src="./assets/images/world-pharma.png" alt="" />
                    </div>
                </Col>
                <Col md={2} className="col-auto">
                    <div>
                        <img src="./assets/images/pngwing.com.png" alt="" />
                    </div>
                </Col>
                <Col md={2} className="col-auto">
                    <div>
                        <img src="./assets/images/QR.png" alt="" />
                    </div>
                </Col>
                <Col md={2} className="col-auto">
                    <div>
                        <img src="./assets/images/certified.png" alt="" />
                    </div>
                </Col>
            </Row>
        </Container>




































        // <FooterMainContainer>
        //     <Container>
        //         <Row>
        //             <Col lg={2} md={4} sm={6} xs={12}>
        //                 <FooterSection links={tradingAddress} heading={'TRADING ADDRESS'} />
        //                 <FooterSection links={registeredAddress} heading={'REGISTERED ADDRESS'} />
        //                 <FooterSection links={callRegistered} heading={'CALL REGISTERED'} />
        //             </Col>
        //             <Col lg={10}>
        //                 <Row>
        //                     <Col lg={3} md={4} sm={6} xs={12}>
        //                         <FooterSection links={company} heading={'Company'} />
        //                     </Col>
        //                     <Col lg={2} md={4} sm={6} xs={12}>
        //                         <FooterSection links={marketplace} heading={'MARKETPLACE'} />
        //                     </Col>
        //                     <Col lg={2} md={4} sm={6} xs={12}>
        //                         <FooterSection links={medical} heading={'Medical'} />
        //                     </Col>
        //                     <Col lg={2} md={4} sm={6} xs={12}>
        //                         <FooterSection links={advertising} heading={'ADVERTISING'} />
        //                     </Col>
        //                     <Col lg={2} md={4} sm={6} xs={12}>
        //                         <FooterSection links={community} heading={'COMMUNITY'} />
        //                     </Col>

        //                     <Col lg={3} md={4} sm={6} xs={12}>
        //                         <FooterSection links={aToZ} heading={'A to Z SITE INDEX'} />
        //                     </Col>
        //                     <Col lg={2} md={4} sm={6} xs={12}>
        //                         <FooterSection links={partners} heading={'PARTNERS'} />
        //                     </Col>
        //                     <Col lg={2} md={4} sm={6} xs={12}>
        //                         <FooterSection links={services} heading={'SERVICES'} />
        //                     </Col>
        //                     <Col lg={2} md={4} sm={6} xs={12}>
        //                         <FooterSection links={affiliates} heading={'AFFILIATES'} />
        //                     </Col>
        //                     <Col lg={2} md={4} sm={6} xs={12}>
        //                         <FooterSection links={helpCenter} heading={'HELP CENTER'} />
        //                     </Col>
        //                 </Row>
        //             </Col>


        //         </Row>
        //     </Container>
        // </FooterMainContainer>
    )
}

export default Footer