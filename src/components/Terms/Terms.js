import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { HeadingTerms, TermsMain } from './StyledTerms'

const Terms = () => {
    return (
        <TermsMain>
            <Container>

                <Row>
                    <Col md={6}
                    >
                        <HeadingTerms>
                            Copyright © 2021 HOPRX . All Rights Reserved. Accessibility, User Agreement, Privacy, Cookies, Do not sell my personal information.
                        </HeadingTerms>
                    </Col>
                    <Col md={6}
                    >
                        <HeadingTerms>
                            RELIEF FROM CHRONIC PAIN IS A HUMAN RIGHT UNDER THE UNITED NATION CHARTER RESPECTED BY ALL UN COUNRIES
                        </HeadingTerms>
                    </Col>
                </Row>
            </Container>
        </TermsMain>
    )
}

export default Terms