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
width: 40%;
outline: none;
margin: 1rem 0.5rem;
-webkit-backdrop-filter: blur(16px) saturate(180%);
backdrop-filter: blur(16px) saturate(180%);
background-color: rgba(17, 25, 40, 0.75);
border-radius: 12px;
border: 1px solid rgba(255, 255, 255, 0.125);
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