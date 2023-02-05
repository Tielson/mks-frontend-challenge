import styled from "styled-components";

export const Container = styled.div`

.box{
    padding: 2.9rem 8.8rem 2.7rem 6.5rem;
    background-color: #0F52BA;

    display: flex;
    height: 10.1rem;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}

    div:nth-child(1){
        display: flex;
        align-items: center;
        gap: 0.6rem;

        h1{
                font-style: normal;
                font-weight: 600;
                font-size: 4.0rem;
                line-height: 1.9rem;
                color: #FFFFFF;
                mix-blend-mode: normal;
            }

            p{
                font-style: normal;
                font-weight: 300;
                font-size: 2.0rem;
                line-height: 1.9rem;
                color: #FFFFFF;
                mix-blend-mode: normal
            }
    }

    button{
        width: 9rem;
        height: 4.5rem;
        background: #FFFFFF;
        display: flex;
        border-radius: 0.8rem;
        align-items: center;
        gap: 1.6rem;
        justify-content: center;
        border: none;

        font-style: normal;
        font-weight: 700;
        font-size: 1.8rem;
        line-height: 2.2rem;

        color: #000000;
    }
`