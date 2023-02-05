import styled from 'styled-components';

export const Container = styled.div`
border-radius: .8rem;   
box-shadow: 0px 0px 6.2px 0.1px #898989;;

button{
    background: none;
    border-radius: .0rem .0rem .8rem .8rem;   
    border: none;
}
.iten{
    text-align: left;
    display: flex;
    flex-direction: column;

.description{
    padding: 0.8rem 0.8rem 0.5rem 0.8rem;
    height: 25rem;


    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    flex-direction: column;
    width: 21.7rem;

    .img1{
        img {max-height: 13.8rem;}
        display: flex;
        justify-content: center;
        background: none;
    }

    p{
        font-style: normal;
        font-weight: 300;
        font-size: 1.0rem;
        line-height: 1.2rem;
        color: #2C2C2C;
        padding-top: 1.5rem;
}

.namePrince{
    display: flex;
    align-items: center;
    height: 3.8rem;
    justify-content: space-between;
    padding-top: 1.4rem ;
    
    h2{
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.9rem;
        color: #2C2C2C;
    }

    span{
        padding: .4rem .6rem;
        background: #373737;
        border-radius: .5rem;
        display: flex;
        align-items: center;
        justify-content: center;

        font-style: normal;
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 1.5rem;
        color: #FFFFFF;
    }
}}

.button{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;

    background: #0F52BA;
    border-radius: .0rem .0rem .8rem .8rem;   
    width: 21.8rem;
    height: 4rem;
    text-transform: uppercase;

    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: #FFFFFF;
      
    h1{
        font-style: normal;
        font-weight: 600;
        font-size: 1.4rem;
        line-height: 1.8rem;
        color: #FFFFFF;
    }
    svg{
        height: 1.4rem;
        width: 1.3rem;
    }
}}
`;
