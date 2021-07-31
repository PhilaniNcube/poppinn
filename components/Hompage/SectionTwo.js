import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('/images/lounge5.jpg');

  .container {
    height: 100%;
    display: flex;
    align-items: center;

    .box {
      width: 60%;
      min-width: 290px;
      height: 50%;
      background-color: var(--light);
      padding: 4rem;
      border-radius: 0.3rem;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
        rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

      p {
        margin-top: 2rem;
        max-width: 80%;
      }
    }
  }
`;

const SectionTwo = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="box">
          <h2 className="section-title">
            Let us help list <br></br>your property
          </h2>
          <p>
            Are you looking to make your property work for you. We can can help
            manage you property for either long term or short term stays.
          </p>
          <Button>Join Us</Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default SectionTwo;
