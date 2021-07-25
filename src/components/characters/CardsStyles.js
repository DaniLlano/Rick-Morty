import styled from "styled-components";

export const CardContainer = styled.div`
display: flex;
flex-wrap: wrap;
margin: auto;
justify-content: center;
`

export const Card = styled.div`
width: 15rem;
height: 20rem;
margin: 1rem;
border-radius: 10px;
backdrop-filter: blur(5px);
background-color: rgba(0,191,255, 0.075);
box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
border: 1px rgba(255,255,255,0.1) solid;
border-bottom: 1px rgba(40,40,40,0.35) solid;
border-right: 1px rgba(40,40,40,0.35) solid;
`

export const ImgContainer = styled.div`
display: flex;
justify-content: center;
width: 7rem;
height: 7rem;
margin: auto;
padding: 1rem 0;
`

export const Img = styled.img`
max-width: 100%;
max-height: 100%;
border-radius: 4rem;
`

export const Name = styled.p`
font-size: 1.5rem;
font-weight: bold;
text-align: center;
margin: 0.2rem 0 0.6rem 0;
`

export const StatusContainer = styled.div`
display: flex;
align-items: center;
height: 1rem;
`

export const Status = styled.span`
display: block;
width: 0.7rem;
height: 0.7rem;
border-radius: 50%;
margin: 0.5rem;
`

export const DataContainer = styled.div`
display: flex;
flex-direction: column;
padding: 1rem 0;
`

export const Data = styled.p`
margin: 0.3rem 1rem;
`