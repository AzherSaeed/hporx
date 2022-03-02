import styled from "styled-components"
import { PrimaryHeading, ViewMoreBtn } from "../../Globals/Globals"


export const NewsLetterMainContianer = styled.div`
margin-top: 5.5rem;
.subscribe-form{
    .input-label{
font-size: 1.6rem;
font-style: normal;
font-weight: 400;
line-height: 1.4rem;
letter-spacing: 0em;
color: #333333;

    }
.input-field{
margin-top: 1rem;
font-size: 1.4rem;
font-style: normal;
font-weight: 400;
line-height: 1.3rem;
letter-spacing: 0em;
color: #828282;
padding:1.5rem 1.5rem;

    }
}

`
export const SubscribeHeading = styled(PrimaryHeading)`
line-height: 4.3rem;

`
export const NewsLetterImg = styled.img`
margin-top: 3rem;
height: 100%;
object-fit: cover;


`
export const SubscribeButton = styled(ViewMoreBtn)`
margin-top: 3rem;

`
