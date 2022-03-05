import styled from "styled-components";

export const TrustedSuppliersMainContainer = styled.div`
text-align: center;
padding: 9rem 0;
h3{
font-size: 30px;
font-style: normal;
font-weight: 500;
line-height: 45px;
letter-spacing: 0em;
color: #242424;

@media screen and (max-width : 775px){
    font-size: 20px;
line-height: 35px;
}
}
/* margin-top: 3.1rem; */
.trusted-suppliers-slick{
    /* padding:3rem 0; */
    /* background-color: #F7F7F7; */
}
`
export const TrustedSuppliersImgContainer = styled.div`
padding: 2rem;
/* margin-top: 4.3rem; */
`
export const TrustedSuppliersImg = styled.img`
height: 7rem;
object-fit: contain;
`


export const TrustedCompanyContainer = styled.div`
    margin-top: 3.8rem;
    padding: 2.1rem;
    background: #FBFAFA;


    h3{
        font-weight: 500;
font-size: 32px;
line-height: 48px;
color: #242424;
text-align: center;
    }
`