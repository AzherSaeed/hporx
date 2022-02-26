import React from 'react'
import { Container } from 'react-bootstrap'
import { PrimaryHeading } from '../../Globals/Globals'
import { LocateImg, LocateMainContainer } from './StylesLocate'
import map from '../../../assets/map.svg'
const Locate = () => {
  return (
    <LocateMainContainer>
      <Container>
        <PrimaryHeading>LOCATE</PrimaryHeading>
        <h3>DOCTORS, ASSOCIATIONS, CANNABIS CLUBS, CAFES, DISPENSARIES AND LAWYERS</h3>
        <p>
          Welcome, the above listed professionals and services can be found using our mapping locator function. The service is provided to all clients and visitors at no charge. However, we request your feedback and use of the service to assess the quality of the assistance you encountered from any of the using the locator. That information will be shared with your peers seeking a similar experience if satisfactory or avoid any establishment doesn't afford them excellent treatment or a high-quality product, goods, or service. The search function is powered by Google Maps technologies, it will direct you to any of the stated services available nearest your hotel, if traveling, or current in-country location.
        </p>
      </Container>
      <LocateImg src={map} alt={map} />
    </LocateMainContainer>
  )
}

export default Locate