import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Button from '../Button';

const Wrapper = styled.div`
  width: 100%;
  height: 90vh;

  .container {
    height: 90vh;
    position: relative;
  }
`;

const Slide = styled.div`
  width: 100%;
  height: 90vh;
  position: relative;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  &.slide-1 {
    background-image: url(images/bedroom.jpg);
  }
  &.slide-2 {
    background-image: url(images/kitchen.jpg);
  }
  &.slide-3 {
    background-image: url(images/lounge2.jpg);
  }
  &.slide-4 {
    background-image: url(images/pool.jpg);
  }

  .text {
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.2537710084033614) 0%,
      rgba(255, 255, 255, 0.6110819327731092) 100%
    );

    h1 {
      font-size: var(--section-title);
      color: var(--black);
    }

    h2 {
      font-size: var(--title);
      max-width: 20ch;
      color: var(--red);
    }
  }
`;

const Hero = () => {
  const [pause, setPause] = useState(false);
  const timer = useRef();
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 2500,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
  });

  useEffect(() => {
    sliderRef.current.addEventListener('mouseover', () => {
      setPause(true);
    });
    sliderRef.current.addEventListener('mouseout', () => {
      setPause(false);
    });
  }, [sliderRef]);

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 3000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);

  return (
    <Wrapper>
      <div className="container" ref={sliderRef} className="keen-slider">
        <Slide className="keen-slider__slide slide-1">
          <div className="text">
            <h1>Bryanston Appartment</h1>
            <h2>Luxurious Bedroom</h2>
          </div>
        </Slide>
        <Slide className="keen-slider__slide slide-2">
          <div className="text">
            <h1>Bryanston Appartment</h1>
            <h2>Well Appointed Kitchen</h2>
          </div>
        </Slide>
        <Slide className="keen-slider__slide slide-3">
          <div className="text">
            <h1>Bryanston Appartment</h1>
            <h2>Space to relax during the day</h2>
          </div>
        </Slide>
        <Slide className="keen-slider__slide slide-4">
          <div className="text">
            <h1>Bryanston Appartment</h1>
            <h2>Swimming Pool</h2>
          </div>
        </Slide>
      </div>
    </Wrapper>
  );
};

export default Hero;
