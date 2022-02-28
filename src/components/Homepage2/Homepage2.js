import React from 'react'
import BrowserHistory from './BrowserHistory.js/BrowserHistory'
import HempProduct from './HempProducts/HempProduct'
import HempProductMIni from './HempProducts/HempProductMIni'
import TrendingNow from './TrendingNow/TrendingNow'
import ViewedToday from './ViewedToday/ViewedToday'
import catagory1 from '../../assets/catagory1.svg'
import catagory2 from '../../assets/catagory2.svg'
import trendingNow from '../../assets/TrendingNows.svg'
import Banner from './HempProducts/Banner'
import { SimilarProductsContainer, ViewTodayContainer } from './StyledHomepage2'

const Homepage2 = () => {
    const mensProducts = [trendingNow, catagory1, catagory2, catagory1];
    const products = [trendingNow, trendingNow, trendingNow, trendingNow];
    const historyProducts = [catagory2, trendingNow, catagory1, trendingNow, catagory2]
    return (
        <>
           <HempProduct/>
           <ViewTodayContainer>
             <ViewedToday heading='Everything you viewed today' />
           </ViewTodayContainer>
            <TrendingNow heading='Trending Now' imgs={products} />
            <HempProductMIni className='Last Month Top Categories' />
            <TrendingNow heading="Man's Product" imgs={mensProducts} />
            <TrendingNow heading="Ladies Product" imgs={mensProducts} />
            <BrowserHistory imgs={historyProducts} />
            <ViewedToday heading='Wishlist' />
            <Banner />
            <TrendingNow heading="Products you brought was recently" imgs={mensProducts} />
            <Banner />
            <TrendingNow heading="Products you may like from your recent choices" imgs={mensProducts} />
            <Banner />
            <SimilarProductsContainer>

            <ViewedToday heading='Similar products trending' /> 
            </SimilarProductsContainer>
        </>
    )
}

export default Homepage2