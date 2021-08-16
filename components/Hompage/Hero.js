import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Button from '../Button';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: linear-gradient(
      to bottom,
      rgba(45, 46, 52, 0.22),
      rgba(25, 40, 55, 0.43)
    ),
    url('/images/lounge.jpg');

  .container {
    height: 90vh;
    display: flex;
    align-items: center;

    .hero-text {
      width: 100%;
      color: white;

      h1 {
        font-size: var(--title);
        font-weight: 400;
        letter-spacing: 0.3rem;
        font-family: 'Roboto', sans-serif;
      }

      p {
        max-width: 40ch;
      }
    }
  }
`;

const Hero = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="hero-text">
          <h1>
            Bryanston <br></br> <strong>Luxury Living</strong>
          </h1>
          <p>
            This modern apartment is situated on the quieter side of Bryanston
            in a newly build picturesque complex.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
