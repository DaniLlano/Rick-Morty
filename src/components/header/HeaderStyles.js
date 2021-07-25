import styled from "styled-components";

export const LogoContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;

`

export const LogoImg = styled.img`
max-width: 45%;

@media (max-width: 768px) {
    max-width: 75%;
}
`

export const Form = styled.form`
display: flex;
justify-content: center;
`

export const Input = styled.input`
font-size: 20px;
padding: 0.4rem;
width: 50%;
outline: none;
margin: 1rem 0.5rem;
border-radius: 10px;
backdrop-filter: blur(5px);
background-color: rgba(0,191,255, 0.075);
box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
border: 1px rgba(255,255,255,0.4) solid;
border-bottom: 1px rgba(40,40,40,0.35) solid;
border-right: 1px rgba(40,40,40,0.35) solid;
`

export const Button = styled.button`
font-size: 17px;
width: 5rem;
cursor: pointer;
outline: none;
margin: 1rem 0.5rem;
background: rgba(255, 255, 255, 0.40);
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
border-radius: 10px;
border: 1px rgba(255,255,255,0.4) solid;
border-bottom: 1px rgba(40,40,40,0.35) solid;
border-right: 1px rgba(40,40,40,0.35) solid;

:hover {
    background: rgba(255, 255, 255, 0.25);
    transition: 0.5s;
}
`