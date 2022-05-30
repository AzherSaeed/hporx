import styled from "styled-components";
import cartgreen from "../../../assets/icons/cart-icon-green.png";
import cartwhite from "../../../assets/icons/cart-icon-white.png";

export const StyleTrending=styled.div`
padding-top: 6.4rem;
/* padding-bottom: 10.2rem; */
.trendingNow-slick{
    .slick-next{
        right: 2.5%;
    }

    .slick-prev{
        left: 1%;
    }

.d-inline-block{
    text-align: -webkit-center;
}

} 


.main-section{
    display:flex;
    height:6.9rem;
    border-bottom:.1rem solid #DADADA ;
    justify-content: space-between;
}
.icons{
    display: felx;
    cursor: pointer;
    margin-top: 1rem;
    
}
.icon-images{
    height: 4rem;
    width:4rem;
}

.main-heading{
    font-weight: 500;
    font-size: 3.6rem;
    line-height: 5rem;
    color: #242424;
    margin-top: 1rem;
    @media screen and (max-width:480px) {
        margin-top: 0;
        font-size: 2.6rem;
        line-height: 3.4rem;
    }
    border-bottom:'1px solid #DADADA';
    padding-top:'1rem';

    
}

.outside-card-text{
    text-align: center;
    font-size: 1.8rem;
    line-height: 2.7rem;
    /* background-color: red; */
}
.card{
    /* width: auto !important; */
    /* margin-right:3rem; */
    text-align: -webkit-center;
    @media screen and (max-width:480px) {
        width: 67% !important;
    }
  background: #FFFFFF;
border: 2px solid #E2E2E2;
    border-radius: 0.3rem;
    @media screen and (max-width:480px) {
        text-align: center;  
        width:95%;
    }
}

.slick-track{
    padding: 15px 0;
}

.card{
    border: none;
    background: #FFFFFF;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    width: 94%;
}


.card .card-body{
    padding: 0;
}

.card .card-body .image-section{
    height: 253px;
    border-bottom: 1px solid #E2E2E2;

    padding: 30px 0;
    display: flex;
    justify-content: center;
}

.card .card-body .image-section .main-img{
    height: 100%;
    object-fit: contain;
}


.card .card-body .content{
    height: 169px;
    width: 100%;
    padding: 14px;
}

.card .card-body .content .title{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.card .card-body .content .title h1{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #242424;
    text-align: left;
}

.card .card-body .content .title span{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    color: #242424;
    }

    .card .card-body .content .rating{
        display: flex;
        align-items: center;
        gap: 6px;
        padding-top: 33px;
    }

    .card .card-body .content .rating .stars{   
        display: flex;
        align-items: center;
        gap: 1px;
    }

    .card .card-body .content .rating img{
        height: 9.89px;
        width: 10.36px;
    }

    .card .card-body .content .rating .review{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 9.46154px;
        line-height: 11px;
    color: #6C6C6C;
    }
    
    .card .card-body .content .add-to-cart{
        height: 45px;
        width: 272px;
        border-radius: 6px;
        padding: 24px, 42px, 24px, 42px;
        background: #FFFFFF;
        border: 1px solid #1F7545;
        box-sizing: border-box;

        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 10px;
        /* or 75% */


        /* HEMP 05 */

        color: #1F7545;

        margin-top: 24px;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

    }

    .card .card-body .content .add-to-cart:hover{
        background: #1F7545;
        color: white;
    }

    .card .card-body .content .add-to-cart:hover > .cart{
        background-image: url(${cartwhite});
    }

    .card .card-body .content .add-to-cart .cart{
        height: 15.07px;
        width: 14.71px;
        background-image: url(${cartgreen});
    }

h2{
    font-size: 2rem;
    line-height: 3.6rem;
    color: #242424;
}
h4{
    color: #242424;
    font-weight: 500;
    font-size: 2rem;
    line-height: 3rem;
    padding: 0 2rem;
}
p{
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: #828282;
    margin-top: .3rem;
    margin-bottom: 2rem;
    padding: 0 2rem;
}
h5{
    font-size: 1.2rem;
    line-height: 2.7rem;
}
`
export const TrendingNowSlick=styled.div`
margin-top: 4rem;

`