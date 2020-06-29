import React from 'react'
import styled from 'styled-components'

const Dot = ({active}) => {
    return (
        <Dotdiv active={active} >

        </Dotdiv>
    )
}
const Dots = ({slides, activeSlide}) => {
    return (
        <Dotsdiv>
            {slides.map((slide, i) => (
            <Dot key={slide} active={activeSlide === i} />
            ))}
        </Dotsdiv>
    )
}

export default Dots

const Dotdiv = styled.div`
    padding: 5px;
    margin-right: 8px;
    cursor: pointer;
    border-radius: 50%;
    background: ${props => props.active ? 'red' : 'white'};
`

const Dotsdiv = styled.div`
    position: absolute;
    bottom: 25px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`