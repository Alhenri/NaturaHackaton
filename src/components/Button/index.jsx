import React from 'react'
import { Link } from 'react-router-dom'
import Styled from 'styled-components'

const StyledButton = Styled.a`
    padding: 12px;
    border-radius: 50px;
    transition: 0.8s;
    margin-left: 5px;
    color: #636363;
    font-weight: 400;
    font-size: 26px;
    text-align: center;
    width: 172px;
    text-decoration: none;
    background-color: #FF9933;
`

function Button({children, to}){
    return(
        <StyledButton as={Link} id="Button" to={to}>
            {children}
        </StyledButton>
    )
}

export default Button;