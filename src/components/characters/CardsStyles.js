import styled from "styled-components";

export const CardContainer = styled.div`
display: flex;
flex-wrap: wrap;
margin: auto;
justify-content: center;
`

export const Card = styled.div`
color: #fafafa;
width: 15rem;
height: 20rem;
margin: 1rem;
backdrop-filter: blur(16px) saturate(180%);
-webkit-backdrop-filter: blur(16px) saturate(180%);
background-color: rgba(17, 25, 40, 0.75);
border-radius: 12px;
border: 1px solid rgba(255, 255, 255, 0.125);
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

export const StyledP = styled.p`
color: #fafafa;
font-size: 1.5rem;
font-weight: bold;
text-align: center;
margin: 0.2rem 0 0.6rem 0;
`

export const StatusContainer = styled.div`
display: flex;
align-items: center;
height: 1rem;
width: fit-content;
background: #666666;
border-radius: 1rem;
padding: 0.7rem;
margin-left: 1rem;
`

export const Status = styled.span`
display: block;
width: 0.7rem;
height: 0.7rem;
border-radius: 50%;
margin: 0 0.3rem;
`

export const DataContainer = styled.div`
display: flex;
flex-direction: column;
padding: 1rem 0;
`

export const Data = styled.p`
margin: 0.3rem 1rem;
`

export const ErrorMsj = styled(Card)`
height: auto;
width: fit-content;
padding: 1.2rem;
margin: auto;
`