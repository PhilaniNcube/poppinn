import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Button from '../Button';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 85vh;

  .keen-slider__slide {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: blue;
    color: #fff;
  }

  .number-slide1,
  .number-slide2,
  .number-slide3,
  .number-slide4,
  .number-slide5 {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: linear-gradient(
        to bottom,
        rgba(45, 46, 52, 0.33),
        rgba(17, 19, 83, 0.55)
      ),
      url('/images/lounge5.jpg');

    .text {
      width: 100%;
      padding: 5rem;

      h1 {
        font-size: 8vw;
        max-width: 10ch;
      }

      p {
        font-size: 2vw;
        line-height: 1.1;
        max-width: 45ch;
      }
    }
  }

  .number-slide2 {
    background-image: linear-gradient(
        to bottom,
        rgba(45, 46, 52, 0.33),
        rgba(17, 19, 83, 0.55)
      ),
      url('/images/kitchen.jpg');
  }

  .number-slide3 {
    background-image: linear-gradient(
        to bottom,
        rgba(45, 46, 52, 0.33),
        rgba(17, 19, 83, 0.55)
      ),
      url('/images/bedroom2.jpg');
  }

  .number-slide4 {
    background-image: linear-gradient(
        to bottom,
        rgba(45, 46, 52, 0.33),
        rgba(17, 19, 83, 0.55)
      ),
      url('/images/bedroom3.jpg');
  }

  .number-slide5 {
    background-image: linear-gradient(
        to bottom,
        rgba(45, 46, 52, 0.33),
        rgba(17, 19, 83, 0.55)
      ),
      url('/images/lounge6.jpg');
  }
`;

const Hero = () => {
  const [pause, setPause] = useState(false);
  const timer = useRef();
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 1000,
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
    }, 2000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);

  return (
    <Wrapper ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <div className="text">
          <h1>Luxury Apartment</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
            quaerat non id similique laboriosam possimus.
          </p>
        </div>
      </div>
      <div className="keen-slider__slide number-slide2">
        <div className="text">
          <h1>Luxury Apartment</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
            quaerat non id similique laboriosam possimus.
          </p>
        </div>
      </div>
      <div className="keen-slider__slide number-slide3">
        <div className="text">
          <h1>Luxury Apartment</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
            quaerat non id similique laboriosam possimus.
          </p>
        </div>
      </div>
      <div className="keen-slider__slide number-slide4">
        <div className="text">
          <h1>Luxury Apartment</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
            quaerat non id similique laboriosam possimus.
          </p>
        </div>
      </div>
      <div className="keen-slider__slide number-slide5">
        <div className="text">
          <h1>Luxury Apartment</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
            quaerat non id similique laboriosam possimus.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
