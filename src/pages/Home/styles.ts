import styled from "styled-components";

export const Container = styled.div`

.group{
    display: flex;
    padding-top: 11.6rem;
    width: 100%;
    margin: auto;
    max-width: 95rem;
    gap:  3.1rem 2.2rem;
    max-height: 28.5rem;
}

.close{
    right: -50rem !important;
}

.trolley{
    
    width: 48.6rem;
    height: 100%;
    border-left: .1rem solid #000;
    background: blue;
    position: fixed;
    right: 0;
    top: 0;
    padding: 3.6rem 5.4rem 0;
    z-index: 10;
    display: grid;
    grid-template-rows: 12.5rem auto 9rem 9.7rem;
    grid-template-areas:
    "T" 
    "I" 
    "P" 
    "B" ;
    align-items: center;
    transition: all 0.3s ease;
    height: 100%;
}

.textExit{
    display: flex;
    justify-content: space-between;
}

.trolley .text{
grid-area: "T";
   
}

.trolley h2{
    width: 18rem;
    font-style: normal;
    font-weight: 700;
    font-size: 2.7rem;
    line-height: 3.3rem;

    color: #FFFFFF;
}

.trolley .exit{
    background: #000000;
    width: 3.8rem;
    height: 3.8rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 2.4rem;
    position: absolute;

        button{
            background: #000000;
            color: #ffff;
            font-size: 2.4rem;
            align-items: center;
            display: flex;
        }
}

.itens
{
    margin-right: -1.5rem;
    grid-area: "I";
    padding-bottom:2rem;
    height: 100%;
    overflow: overlay; 
    padding-top: 1rem ;
 }

 .itens::-webkit-scrollbar {
  width: .6rem;              
}

.itens::-webkit-scrollbar-track {
  background: blue;      
}

.itens::-webkit-scrollbar-thumb {
  background-color: #ffff;    
  border-radius: 2.0rem;      
  border: .3rem solid #ffff;  
}

.trolley .prince{
    grid-area: "P";
    justify-content: space-between;

    h2:nth-child(2){
        text-align: right;
    }
}

.trolley .button{
    margin: -5.5rem;
}

.trolley .button button{
    border: none;
    color: #000;
    width: 100%;
    height: 9.7rem; 
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.5rem;
    background-color: #EEEEEE;
    background: #000000;
    font-style: normal;
    font-weight: 700;
    font-size: 2.8rem;
    line-height: 1.5rem;
    color: #FFFFFF;
}

footer{
    position: fixed;
    bottom: 0;
    color: #000;
    width: 100%;
    height: 3.4rem; 
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.5rem;
    background-color: #EEEEEE;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
}
`