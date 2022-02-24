import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FooterSection from './FooterSection'
import { FooterMainContainer } from './StyledFooter'

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
        <FooterMainContainer>
            <Container>
                <Row>
                    <Col lg={2} md={4} sm={6} xs={12}>
                        <FooterSection links={tradingAddress} heading={'TRADING ADDRESS'} />
                        <FooterSection links={registeredAddress} heading={'REGISTERED ADDRESS'} />
                        <FooterSection links={callRegistered} heading={'CALL REGISTERED'} />
                    </Col>
                    <Col lg={10}>
                        <Row>
                            <Col lg={3} md={4} sm={6} xs={12}>
                                <FooterSection links={company} heading={'Company'} />
                            </Col>
                            <Col lg={2} md={4} sm={6} xs={12}>
                                <FooterSection links={marketplace} heading={'MARKETPLACE'} />
                            </Col>
                            <Col lg={2} md={4} sm={6} xs={12}>
                                <FooterSection links={medical} heading={'Medical'} />
                            </Col>
                            <Col lg={2} md={4} sm={6} xs={12}>
                                <FooterSection links={advertising} heading={'ADVERTISING'} />
                            </Col>
                            <Col lg={2} md={4} sm={6} xs={12}>
                                <FooterSection links={community} heading={'COMMUNITY'} />
                            </Col>

                            <Col lg={3} md={4} sm={6} xs={12}>
                                <FooterSection links={aToZ} heading={'A to Z SITE INDEX'} />
                            </Col>
                            <Col lg={2} md={4} sm={6} xs={12}>
                                <FooterSection links={partners} heading={'PARTNERS'} />
                            </Col>
                            <Col lg={2} md={4} sm={6} xs={12}>
                                <FooterSection links={services} heading={'SERVICES'} />
                            </Col>
                            <Col lg={2} md={4} sm={6} xs={12}>
                                <FooterSection links={affiliates} heading={'AFFILIATES'} />
                            </Col>
                            <Col lg={2} md={4} sm={6} xs={12}>
                                <FooterSection links={helpCenter} heading={'HELP CENTER'} />
                            </Col>
                        </Row>
                    </Col>


                </Row>
            </Container>
        </FooterMainContainer>
    )
}

export default Footer