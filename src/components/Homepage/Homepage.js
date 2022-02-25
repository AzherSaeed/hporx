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
import Marketplace from '../MarketPlace/Marketplace'
import Diaganose from './Diagnose/Diaganose'
import EMultiVendor from './EMultiVendor/EMultiVendor'
import mensFashionDiscount from '../../assets/mensFashionDiscount.svg'
import giftCard from '../../assets/giftCard.svg'
import Locate from './Locate/Locate'

import interOrg1 from '../../assets/interOrg1.svg'
import interOrg2 from '../../assets/interOrg2.svg'
import interOrg3 from '../../assets/interOrg3.svg'
import interOrg4 from '../../assets/interOrg4.svg'
import interOrg5 from '../../assets/interOrg5.svg'
import trustedSupplier2 from '../../assets/trustedSupplier2.svg'
import trustedSupplier3 from '../../assets/trustedSupplier3.svg'
import trustedSupplier4 from '../../assets/trustedSupplier4.svg'
import trustedSupplier5 from '../../assets/trustedSupplier5.svg'
import trustedSupplier6 from '../../assets/trustedSupplier6.svg'
import FollowUs from './FollowUs/FollowUs'
import followUs1 from '../../assets/followUs1.svg'
import followUs2 from '../../assets/followUs2.svg'
import followUs3 from '../../assets/followUs3.svg'
import followUs4 from '../../assets/followUs4.svg'
import followUs5 from '../../assets/followUs5.svg'
import followUs6 from '../../assets/followUs6.svg'
import followUs7 from '../../assets/followUs7.svg'
import followUs8 from '../../assets/followUs8.svg'
import hygie1 from '../../assets/hygie1.svg'
import hygie2 from '../../assets/hygie2.svg'
import hygie3 from '../../assets/hygie3.svg'
import hygie4 from '../../assets/hygie4.svg'
import hygie5 from '../../assets/hygie5.svg'
import hygie6 from '../../assets/hygie6.svg'
import hygie7 from '../../assets/hygie7.svg'
import hygie8 from '../../assets/hygie8.svg'
import hygie9 from '../../assets/hygie9.svg'




const Homepage = () => {
  const fashionDiscountImgs = [mensFashionDiscount, mensFashionDiscount, mensFashionDiscount, mensFashionDiscount, mensFashionDiscount, mensFashionDiscount]
  const giftImgs = [giftCard, giftCard, giftCard, giftCard, giftCard, giftCard]
  const trustedSuppliers=[trustedSupplier2,trustedSupplier3,trustedSupplier4,trustedSupplier5,trustedSupplier6,trustedSupplier6]
  const trustedOrganizations=[interOrg1,interOrg2,interOrg3,interOrg4,interOrg5,interOrg1]
  const followUsImgs=[{img:followUs1,title:'Twitter'},{img:followUs2,title:'Facbook'},{img:followUs3,title:'Youtube'},{img:followUs4,title:'TencentQQ'},{img:followUs5,title:'Vkontakte'},{img:followUs6,title:'Messenger'},{img:followUs7,title:'Instagram'},{img:followUs8,title:'LinkedIn'},]
  const hygieImgs=[{img:hygie1,title:'Europe'},{img:hygie2,title:'USA'},{img:hygie3,title:'Canada'},{img:hygie4,title:'Qatar'},{img:hygie5,title:'Dubai'},{img:hygie6,title:'Spain'},{img:hygie7,title:'Qatar'},{img:hygie8,title:'Spain'},{img:hygie9,title:'Dubai'}]
  return (
    <>
      <PlayBtnContainer />
      {/* <Header/> */}
      {/* <Inhalate/>
     <Vaporize/>
      <Portable/>  
       <Chillum/>
     <Cutivation/> 
       <Agriculture/>
      <GrowProfit/>
       <BelowGrowProfit/>
      <TrustedSuppliers/>  */}
      {/* <Prescribe/> */}
      {/* <MedicinesSlick/>
      <MedicinesSlick/> */}
      {/*
      <SubscribeNewsletter/>
    */}
      {/* <EMultiVendor/> */}
      {/* <Diaganose/>
    <MedicineSmallSlick/> 
  <Marketplace/> */}
      {/* <Footer/>  */}
      {/* <Locate/> */}
      {/* <FashionDiscount imgs={fashionDiscountImgs}/>
  <FashionDiscount  imgs={giftImgs}/> */}
      {/* <Statistics />
      <TrustedSuppliers imgs={trustedSuppliers} head='Trusted International Brands'/>
      <TrustedSuppliers imgs={trustedOrganizations} head='Trusted International Organizations'/> */}
      {/* <FollowUs imgs={followUsImgs} head='Follow Us' imgs1={hygieImgs}  head1='Hygieia Apothecary' /> */}
    </>
  )
}

export default Homepage