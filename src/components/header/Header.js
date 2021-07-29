import React from 'react'
import Logo from '../../assets/logo.png'
import { LogoContainer, LogoImg, Form, Input } from './HeaderStyles'
import { FcSearch } from "react-icons/fc";

function Header({ filter, setFilter }) {

    const handleInputChange = (e) => {
        setFilter(e.target.value)
    }


    return (
        <div>
            <LogoContainer>
                <LogoImg src={Logo} />
            </LogoContainer>
            <Form>
                
                <Input placeholder="🔍  Buscá un personaje" value={filter} onChange={handleInputChange}/>
            </Form>
        </div>
    )
}

export default Header
