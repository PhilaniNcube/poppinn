import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  height: 85vh;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      to bottom,
      rgba(45, 46, 52, 0.33),
      rgba(47, 19, 83, 0.55)
    ),
    url('/images/lounge6.jpg');
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  h1 {
    font-size: 10vw;
  }
`;

const Hero = () => {
  return (
    <Wrapper>
      <h1>ABOUT US</h1>
    </Wrapper>
  );
};

export default Hero;
