import React from 'react'
import Styled from 'styled-components'

const StyledInput = Styled.input`
    width: 200px;
    height: auto;
    margin: 5px;

    text-align: center;
    color: #636363;
    font-weight: 400;
    font-size: 26px;

    background: #FFD6AD;
    border: 1px solid #FF9933;
    box-sizing: border-box;
    border-radius: 50px;
`

function Input({type, value}){
    return(
    <StyledInput type={type} value={value} />
    )
}

export default Input;