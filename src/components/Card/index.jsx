import React from 'react'
import { Link } from 'react-router-dom'
import Styled from 'styled-components'

const StyledCard = Styled.a`
    
    padding: 15px;
    display: flex;
    border-radius: 5px;
    color: #636363;
    text-align: center;
    background-color:#FF9933;
    margin-bottom: 25px;
    text-decoration: none;

    img{
    margin: 0 15px;
    }
`

function Card({children, to}){
    return(
        <StyledCard as={Link} to={to}>
            {children}
        </StyledCard>
    )
}

export default Card;