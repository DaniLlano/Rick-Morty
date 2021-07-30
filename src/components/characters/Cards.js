import React from 'react'
import { Card, ImgContainer, Img, StyledP, StatusContainer, Status, DataContainer, Data } from './CardsStyles'


function Cards({characters}) {

    return (
            <Card>
                    <ImgContainer>
                    <Img src={characters.image} />
                    </ImgContainer>
                <StyledP>{characters.name}</StyledP>
                <StatusContainer>
                    <Status className={characters.status} />
                    <p>{characters.status}</p>
                </StatusContainer>
                <DataContainer>
                    <Data>{characters.species} - {characters.gender}</Data>
                    <Data>Location: {characters.location.name}</Data>
                </DataContainer>
            </Card>

    )
}

export default Cards
