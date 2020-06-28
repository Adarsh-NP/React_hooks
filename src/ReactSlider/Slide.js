import React from 'react'
import styled from 'styled-components'

const Slide = ({ content }) => (
    <Slidiv content={content}>

    </Slidiv>
)

export default Slide

const Slidiv = styled.div`
    height: 100%;
    width: 100%;
    background-image: url('${props => props.content}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`
