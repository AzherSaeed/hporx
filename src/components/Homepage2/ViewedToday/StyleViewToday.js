import styled from "styled-components"

export const ViewTodayStyle = styled.div`
  
    .viewToday-slick{
        margin-top: 3.3rem;
    .slick-next{
    right: 0 !important;  
    @media screen and (max-width:480px) {
        right: 10px !important;
    } 
} 
    .slick-prev{
    @media screen and (max-width:768px) {
    left: -13px;
   }
}
    }
    .view-today{
        @media screen and (max-width:480px) {
    text-align: center;
   }
    }
    .d-inline-block{
        @media screen and (max-width:480px) {
            width: 90%;
   }
    }
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
.card{
    width:auto !important;
    background: #FFFFFF;
    border-radius: 0.3rem;
    margin-right:1rem ;
  
}
img{
    width: 9.5rem;
    height: 13rem;
    margin: 3rem 1.5rem;
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