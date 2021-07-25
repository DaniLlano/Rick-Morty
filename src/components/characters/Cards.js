import React from 'react'
import { Card, ImgContainer, Img, Name, StatusContainer, Status} from './CardsStyles'


function Cards({characters}) {

    return (
                <Card key={characters.id}>
                    <ImgContainer>
                    <Img src={characters.image} />
                    </ImgContainer>
                <Name>{characters.name}</Name>
                <StatusContainer>
                    <Status className={characters.status} />
                    <p>{characters.status}</p>
                </StatusContainer>
            </Card>

    )
}

export default Cards
