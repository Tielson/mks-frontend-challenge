import styled from "styled-components";

export const Container = styled.div`
    height: 10.1rem;
    width: 100%;
    background-color: #ffff;
    background: #FFFFFF;
    box-shadow: -.2rem .2rem 1.0rem rgba(0, 0, 0, 0.05);
    border-radius: .8rem;
    margin-bottom: 2.2rem;

    .product{
        height: 100%;
        display: grid !important;
        justify-content: center;
        justify-items: center;
        align-items: center;
        grid-template-columns: 8rem 11.2rem 9rem 9.4rem auto;
        grid-template-areas: 
        "AA BB CC DD ee";
    }
    
    .img{
        grid-column: "AA" ;
        img{
            width: 4.6rem;
            height: 5.7rem;
            background-color: none;
            justify-content: center;

        }
    }

    .name{
        grid-column: "BB";
        justify-content: center;
        font-style: normal;
        font-weight: 400;
        font-size: 1.3rem;
        line-height: 1.7rem;

        color: #2C2C2C;
    }

.qnt{
    grid-column: "CC";
    justify-content: center;
    border:  0.3px solid #BFBFBF;
    display: flex;
    gap: 1.1rem;
    padding: 0.5rem 0.8rem;
    border-radius: 0.4rem;

    button{
        border: none;
        background-color: transparent;
    }

     .subtract::before {
        content: '';
        position: relative;
        width: 1rem;
        height: 2rem;
        border-left: 0.1rem solid #BFBFBF;
        bottom: 0px;
        right: -14px;
    }

     .subtract::after {
        content: '';
        position: relative;
        width: 1rem;
        height: 2rem;
        border-left: 0.1rem solid #BFBFBF;
        bottom: 0px;
        right: -25px;
    }
    }

    .price{
        grid-column: "DD";
        justify-content: center;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;

        color: #000000;
    }

    .remove {
        top: -1.0rem;
        position: absolute;
        right: -.8rem;
        border-radius: 50%;
        background: black;
        width: 1.8rem;
        height: 1.8rem;
        color: white;
        font-size: 1.1rem;
    }
`