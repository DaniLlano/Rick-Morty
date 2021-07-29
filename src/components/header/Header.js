import React from 'react'
import Logo from '../../assets/logo.png'
import { LogoContainer, LogoImg, Form, Input, Button } from './HeaderStyles'

function Header({ filter, setFilter }) {

    const handleSubmit = (e) => {
        e.preventDefault()
        setFilter(filter)
        console.log(filter)
    }

    const handleInputChange = (e) => {
        setFilter(e.target.value)
    }

    return (
        <div>
            <LogoContainer>
                <LogoImg src={Logo} />
            </LogoContainer>
            <Form>
                <Input placeholder="Buscá un personaje" value={filter} onChange={handleInputChange}/>
                <Button onClick={handleSubmit}>🔍</Button>
            </Form>
        </div>
    )
}

export default Header
