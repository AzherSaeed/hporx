import styled from "styled-components"

export const ViewTodayStyle = styled.div`
  
    
.everythingviewproduct{
    background: #FFFFFF;
    border: 1px solid #E2E2E2;
}


.main-heading{
    font-weight: 500;
    font-size: 3.6rem;
    line-height: 5.4rem;
    color: #242424;
    padding-bottom:1.4rem ;
    border-bottom:1px solid #DADADA ;
    @media screen and (max-width:480px) {
    font-size: 2.6rem;
    line-height: 3.4rem;

}
}

.viewToday-slick .view-today .card-inner{
    
    height: 251px;
    width: 100%;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;
}





.card{
    /* margin-right:3rem ; */
    width: 94%;
    border-radius: 6px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.card .image-section{
    height: 211px;
    width: 100%;
    position: relative;
    border-radius: 6px 6px 0 0;
}

.card .image-section .tag{
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 6px 0px 0px 0px;
    height: 36px;
    width: 38px;
    background: #FF3F3F;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #FFFFFF;
}

.card .image-section img{
    height: 100%;
    width: 100%;
    object-fit: fill;
}

.card .advertise{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 9px;

    height: 40px;
    background: #D1E682;
    border-radius: 0px 0px 6px 6px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    /* or 100% */


    color: #000000;
}


.card .advertise span{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    /* or 97% */


    color: #000000;
}





.card .advertise img{
    height: 17px;
    width: 23px;
}
.viewToday-slick .slick-prev {
    left: 1%;
}

.viewToday-slick .slick-next {
    right: 2.5%;
}
.viewToday-slick .slick-prev:before {
    content: '' !important;
    background-image: url(/static/media/left-slider-arrow.a0ebde13.svg) !important;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    padding: 2rem;
    position: absolute;
    left: 0;
    top: bottom;
    bottom: -26%;
}



.right-block{
    margin-top:2.5rem;
    margin-right: 1rem;
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
}
p{
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: #828282;
    margin-top: .3rem;
    margin-bottom: 2rem;
}

`
export const ViewTodaySlick = styled.div`
margin-top: 4rem;
`