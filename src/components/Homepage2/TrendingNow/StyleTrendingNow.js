import styled from "styled-components";

export const StyleTrending=styled.div`
margin-top: 6.4rem;

.main-heading{
    font-weight: 500;
    font-size: 3.6rem;
    line-height: 5.4rem;
    color: #242424;
    padding-bottom:1.4rem ;
    border-bottom:.1rem solid #DADADA ;
}

.outside-card-text{
    text-align: center;
    font-size: 1.8rem;
    line-height: 2.7rem;
}
.card{
  width: 100%;
    border:.1rem solid #DADADA ;
    border-radius: 0.3rem;
    @media screen and (max-width:480px) {
        text-align: center;  
    }
}
img{
    width: 19rem;
    height: 18rem;
    margin: 3.6rem 3rem;
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