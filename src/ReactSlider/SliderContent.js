import React from 'react'
import styled from 'styled-components'

const SliderContent = (props) => {
    const {transition, translate, width} = props
    return (
            <SliderContentdiv className='sliderContent' transition={transition} translate={translate} width={width}>
                {props.children}
            </SliderContentdiv>
    )
}

const SliderContentdiv = styled.div`
    transform: translateX(-${props => props.translate}px);
    transition: transform ease-out ${props => props.transition}s; /*this is usually fixed*/
    height: 100%;
    width: ${props => props.width}px;
    display: flex;
`

export default SliderContent
