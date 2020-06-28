import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import SliderContent from './SliderContent'
import Slide from './Slide'
import Arrow from './Arrow'
import Dots from './Dots'

const Slider = ({slides, height, width, autoplay}) => {

    const getWidth = () => window.innerWidth



    const [state, setState] = useState({
        activeSlide: 0,
        translate: 0,
        transition: 0.4,
    })

    const {activeSlide, translate, transition} = state

    const autoPlayRef = useRef()

    useEffect(()=> {
        autoPlayRef.current = nextSlide
    })

    useEffect(() => {
    const play = () => {
      autoPlayRef.current()
    }
    if(autoplay !== (null || 0) ){
        const interval = setInterval(play, autoplay*1000)
        return () => clearInterval(interval)
    }
    }, [autoplay])

    const nextSlide = () => {
        if(activeSlide === slides.length - 1){
            return setState({
                ...state,
                translate: 0,
                activeSlide: 0
            })
        }
        setState(prevState => ({
            ...state,
            activeSlide : prevState.activeSlide + 1,
            translate: (prevState.activeSlide + 1) * getWidth()
        }))
    }
    const prevSlide = () => {
        if(activeSlide === 0){
            return setState({
                ...state,
                translate: (slides.length - 1)*getWidth(),
                activeSlide: slides.length - 1
            })
        }
        setState(prevState => ({
            ...state,
            activeSlide : prevState.activeSlide - 1,
            translate: (prevState.activeSlide - 1) * getWidth()
        }))
    }

    return (
        <SliderMain height={height} width={width} slides={slides} autoplay={autoplay}>
            <SliderContent translate={translate} transition={transition} width={getWidth()*slides.length}>
                {slides.map((slide, i) => (
                    <Slide key={slide + i} content={slide}></Slide>
                ))}
            </SliderContent>
            {!autoplay && (
                <>
                    <Arrow direction='left' handleClick={prevSlide}></Arrow>
                    <Arrow direction='right' handleClick={nextSlide}></Arrow>
                </>    
            )}
            <Dots slides = {slides} activeSlide={activeSlide}></Dots>
        </SliderMain>
    )
}

export default Slider

Slider.defaultProps = {
    autoplay: null,
    slides: []
}

const SliderMain = styled.div`
    position: relative;
    height: ${props => props.height ? props.height : '100vh'};
    width: ${props => props.width ? props.width : '100vw'};
    margin: 0 auto;
    overflow: hidden;
`
