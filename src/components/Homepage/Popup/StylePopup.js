import styled from 'styled-components'

export const StylePopup=styled.div`
background-color: #0a472e;
margin: 4rem 4rem;
border-radius: .3rem ;
color: #fff;
position: relative;
.logo{
    height: 20rem;
    width :20rem;
}
.borders{
    border-right: .2rem solid #fff;
}
.win-text{
    font-size: 2.4rem;
    font-weight: 500;
}
.price-style{
    font-size: 10rem;
    font-weight: 600;
    line-height: 9rem;
}
.dollar-sign{
    font-size: 5.9rem;
    line-height: 9rem;
    margin-bottom: 0;
    font-weight: 600;
    margin-left:-2rem;
}
.paragraph{
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 6rem;
}
.choose-file{
    width: 80%;
    color: #fff;
    height: 48px;
    border: 1px solid #fff;
    padding: .6rem 2.4rem;
    font-size: 1.6rem;
    background-color: #0a472e;
    margin-bottom: 8rem;
}
.dateofbirth{
    font-size: 2.4rem;
    margin-top: -5rem;
}
.form-group{
    margin: 2rem 6rem;
}
.labels{
    text-align: left;
    font-size: 1.6rem;
}
.inputs{
    width:80%;
    height:5rem;
    font-size:1.6rem;
}
.btns{
    width: 17rem;
    background: #6fa871;
    font-weight: 700;
    color: #fff;
    border: 0;
    border-radius: 0.25rem;
    cursor: pointer;
    padding: 1rem .5rem;
    margin-top: 6rem;
    &:hover{
        border: .3rem solid white;
    }
}
.rows{
    margin-top: -7rem;
}
.btn-close{
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 5rem;
    border: .1rem solid #fff;
    background-color: #fff;
    position: absolute;
    top: -4rem;
    right: -2rem;
    opacity:.5;
    &:hover{
        color: #000;
        text-decoration: none;
       opacity: .75
    }
}
`