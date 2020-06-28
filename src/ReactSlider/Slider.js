import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import SliderContent from './SliderContent'
import Slide from './Slide'
import Arrow from './Arrow'
import Dots from './Dots'

const Slider = ({slides, height, width, autoplay}) => {

    const getWidth = () => window.innerWidth

    const firstSlide = slides[0]
    const secondSlide = slides[1]
    const lastSlide = slides[slides.length - 1]


    const [state, setState] = useState({
        activeSlide: 0,
        translate: getWidth(),
        transition: 0.4,
        _slides: [lastSlide, firstSlide, secondSlide]
    })

    const {activeSlide, translate, transition, _slides} = state

    const autoPlayRef = useRef()
    const transitionRef = useRef()
    const resizeRef = useRef()

    useEffect(()=> {
        autoPlayRef.current = nextSlide
        transitionRef.current = smoothTransition
        resizeRef.current = handleResize
    })


    const handleResize = () =>  {
        setState({
             ...state, 
             translate: getWidth(), 
             transition: 0 
        })
    }

    const smoothTransition = () => {
        let _slides = []
    
        // We're at the last slide.
        if (activeSlide === slides.length - 1)
          _slides = [slides[slides.length - 2], lastSlide, firstSlide]
        // We're back at the first slide. Just reset to how it was on initial render
        else if (activeSlide === 0) _slides = [lastSlide, firstSlide, secondSlide]
        // Create an array of the previous last slide, and the next two slides that follow it.
        else _slides = slides.slice(activeSlide - 1, activeSlide + 2)
    
        setState({
          ...state,
          _slides,
          transition: 0,
          translate: getWidth()
        })
      }
    
      useEffect(() => {
        if (transition === 0) setState({ ...state, transition: 0.45 })
      }, [transition])

    useEffect(() => {
        const play = () => {
        autoPlayRef.current()
        }

        const smooth = e => {
            if (e.target.className.includes('sliderContent')) {
              transitionRef.current()
            }
        }

        const resize = () => {
            resizeRef.current()
        }
        
        let interval = null

        const transitionEnd = window.addEventListener('transitionend', smooth)
        const onResize = window.addEventListener('resize', resize)

        if(autoplay !== (null || 0) ){
            interval = setInterval(play, autoplay*1000)
        }

        return () => {
            window.removeEventListener('transitionend', transitionEnd)
            window.removeEventListener('resize', onResize)
            if(autoplay !== (null || 0) ){
                clearInterval(interval)
            }
        }
    }, [autoplay])

    const nextSlide = () =>
    setState({
      ...state,
      translate: translate + getWidth(),
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1
    })

  const prevSlide = () =>
    setState({
      ...state,
      translate: 0,
      activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1
    })


    return (
        <SliderMain height={height} width={width} slides={slides} autoplay={autoplay}>
            <SliderContent translate={translate} transition={transition} width={getWidth()*_slides.length}>
                {_slides.map((slide, i) => (
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
