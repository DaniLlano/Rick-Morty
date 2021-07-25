import React from 'react'
import Logo from '../../assets/logo.png'
import { LogoContainer, LogoImg, Form, Input, Button } from './HeaderStyles'

function Header({ filter, setFilter }) {

    const handleInputChange = (e) => {
        setFilter(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        setFilter(filter)
        console.log(filter)
    }

    return (
        <div>
            <LogoContainer>
                <LogoImg src={Logo} />
            </LogoContainer>
            <Form>
                <Input placeholder="Find character by name" value={filter} onChange={handleInputChange}/>
                <Button onClick={handleSubmit}>Search</Button>
            </Form>
        </div>
    )
}

export default Header
