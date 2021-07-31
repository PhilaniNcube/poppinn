import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: linear-gradient(to right, #fff 50%, 50%, transparent),
    url('images/lounge2.jpg');

  /* &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: #fff;
  } */

  .container {
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 333;

    h1 {
      max-width: 85%;
      font-weight: var(--light-font);
      letter-spacing: 0.2rem;
      /* text-transform: uppercase; */
      /* font-weight: var(--light-font); */
      span {
        /* font-weight: var(--medium-font); */
        /* text-transform: uppercase; */
        color: var(--red);
      }
    }

    p {
      font-size: 2rem;
      max-width: 50%;
      margin-top: 1.5rem;
    }
  }
`;

const Hero = () => {
  return (
    <Wrapper>
      <div className="container">
        <h1 className="title">
          <span>Popp Inn</span> <br></br>Property Management
        </h1>
        <p>
          Popp Inn is a dynamic upmarket property management company that is
          passionate about people and the leisure industry.
        </p>
        <Button>Properties</Button>
      </div>
    </Wrapper>
  );
};

export default Hero;
