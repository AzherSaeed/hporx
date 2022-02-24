import React from 'react'
import Agriculture from './Agriculture/Agriculture'
import BelowGrowProfit from './BelowGrowProfit/BelowGrowProfit'
import Chillum from './Chillums/Chillums'
import Cutivation from './Cultivation/Cultivation'
import GrowProfit from './GrowProfit/GrowProfit'
import Header from './Header/Header'
import MedicinesSlick from './Medicines Slick/MedicinesSlick'
import MedicineSmallSlick from './MedicineSmallSlick/MedicineSmallSlick'
import Portable from './Portable/Portable'
import Prescribe from './Prescribe/Prescribe'
import Statistics from './Statistics/Statistics'
import SubscribeNewsletter from './SubscribeNewsletter/SubscribeNewsletter'
import TrustedSuppliers from './TrustedSuppliers/TrustedSuppliers'
import Vaporize from './Vaporize/Vaporize'
import Footer from './Footer/Footer'
import FashionDiscount from './FashionDiscount/FashionDiscount'
import Inhalate from './Inhalate/Inhalate'
import { PlayBtnContainer } from '../Globals/Globals'

const Homepage = () => {
  return (
    <>
    <PlayBtnContainer/>
      {/* <Header/> */}
       <Inhalate/>
     <Vaporize/>
      <Portable/>  
       <Chillum/>
     <Cutivation/> 
       <Agriculture/>
      <GrowProfit/>
      {/* <BelowGrowProfit/>
      <TrustedSuppliers/> */}
      {/* <Prescribe/> */}
      <MedicinesSlick/>
      <MedicinesSlick/>
     {/* <MedicineSmallSlick/> 
      <Statistics/>
      <SubscribeNewsletter/>
      <FashionDiscount/>
      <Footer/> */}
    </>
  )
}

export default Homepage