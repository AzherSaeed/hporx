import styled from "styled-components";

export const LocateMainContainer = styled.div`
text-align: center;
margin-top: 9rem;

h3{
 margin-top: 1.6rem;
font-size: 2.8rem;
font-style: normal;
font-weight: 500;
line-height: 2.4rem;
letter-spacing: 0em;
color: #333333;
opacity: 0.8;
text-align: start;
padding: 0 5rem;
 @media screen and (max-width:480px) {
  padding: 0 0;
 }
}
p{
  margin-top: 1.6rem;
font-size: 1.8rem;
font-style: normal;
font-weight: 400;
line-height: 2.4rem;
letter-spacing: 0em;
color: #828282;
opacity: 0.8;
padding: 0 5rem;

}
.map{
  width: 100%;
  height:62.5rem;
  position: relative;
    z-index: -1;
    transform: translateY(-10%);
}
.location-icon{
  height: 2rem;
  width: 2rem; 
}
.location-info{
  position: absolute;
  top: 50px;
  right: 50px;
  width: 400px;
  min-height:200px; 
  padding: 20px ;
  background-color: rgba(0, 0,0, .6);
  border-radius: 10px;
  font-size: 18px;
  color: #fff;
}
.location-info ul{
  list-style-type: none;
  padding: 0;

}
.location-info li{
  padding: 5px 0;
}
@media only screen and (max-width: 480PX) {
  P{
    padding: 0 0;
text-align: start;

  }

}
`
export const LocateImg=styled.img`

`