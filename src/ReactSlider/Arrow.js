import React from 'react'
import styled from 'styled-components'
import IosArrowForward from 'react-ionicons/lib/IosArrowForward'
import IosArrowBack from 'react-ionicons/lib/IosArrowBack'

const Arrow = ({direction, handleClick}) => (
        <ArrowDiv onClick={handleClick} direction={direction}>
            {direction === 'right' ? <IosArrowForward/> : <IosArrowBack/>}
        </ArrowDiv>
)

export default Arrow

const ArrowDiv = styled.div `
    display:flex;
    position: absolute;
      top: 50%;
      ${props => props.direction === 'right' ? `right: 25px` : `left: 25px`};
      height: 40px;
      width: 40px;
      justify-content: center;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      align-items: center;
      transition: transform ease-in 0.1s;
      &:hover {
        transform: scale(1.1);
      }
      img {
        transform: translateX(${props => props.direction === 'left' ? '-2' : '2'}px);
        &:focus {
          outline: 0;
        }
      }
`