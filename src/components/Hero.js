import React from 'react'
import styled from 'styled-components'
import Video from '../assets/videos/fitness-3.mp4'
import {Button} from './Button'

const Hero = () => {
  return (
   <HeroContainer>
    <HeroBg>
        <VideoBg src={Video} type="vido/mp4" autoPlay loop muted playInLine/>
    </HeroBg>
    <HeroContent>
        <HeroItems>
            <HeroH1>Unreal fitness gains</HeroH1>
            <HeroP>Strength, Performance, Power.</HeroP>
            <Button primary="true" round="true" big="true" to="/classes" css={`z-index: 4;`}>Train With Us</Button>
        </HeroItems>
    </HeroContent>
   </HeroContainer>
  )
}

export default Hero

// dislay flex allows us to center content
// background is transparent for the header, so setting margin-top will allow the Hero
// to take over the header on scroll
const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    color: #fff;
    height: 100vh;
    padding: 0 1rem;
    position: relative;
    margin-top: -80px;
`
const HeroBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow: hidden;
`
const VideoBg = styled.video`
    width: 100vw;
    height: 100vh;
    -o-object-fit: cover;
    object-fit: cover;
`
const HeroContent = styled.div`
    z-index: 3;
    height: calc(100vh - 80px);
    max-height: 100%;
    padding: 0rem calc((100vw - 1300px) / 2);
`
const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    max-height: 100%;
    padding: 0;
    color: #fff;
    line-height: 1.1;
    font-weight: bold;
`
const HeroH1 = styled.div`
    font-size: clamp(1.5rem, 6vw, 4rem);
    margin-bottom: 1.5rem;
    letter-spacing: 3px;
    padding: 0 1rem;
`
const HeroP = styled.div`
    font-size: clamp(1rem, 3vw, 3rem);
    margin-bottom: 2rem;
`
